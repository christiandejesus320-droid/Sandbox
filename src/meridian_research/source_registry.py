"""Source verification helpers for auditable Meridian research plans."""

from dataclasses import dataclass
from urllib.parse import urlparse


OFFICIAL_DOMAIN_SUFFIXES = (
    ".gov",
    ".edu",
)


@dataclass(frozen=True)
class SourceAssessment:
    """A deterministic assessment that never claims a URL was fetched."""

    url: str
    host: str
    is_secure: bool
    is_official_domain: bool
    reason: str


def assess_source(url: str, official_domains: tuple[str, ...] = ()) -> SourceAssessment:
    """Assess URL shape and domain policy without making a network request.

    The function deliberately reports policy signals only. A caller must still
    fetch the URL through an approved adapter and record the returned evidence.
    """

    parsed = urlparse(url)
    if parsed.scheme not in {"http", "https"} or not parsed.netloc:
        raise ValueError("url must be an absolute http(s) URL")

    host = parsed.hostname or ""
    normalized_domains = tuple(domain.lower().lstrip(".") for domain in official_domains)
    is_official = host.lower() in normalized_domains or host.lower().endswith(OFFICIAL_DOMAIN_SUFFIXES)
    is_secure = parsed.scheme == "https"

    if is_official and is_secure:
        reason = "secure official-domain candidate"
    elif is_official:
        reason = "official-domain candidate requires HTTPS review"
    elif is_secure:
        reason = "secure third-party source requires provenance review"
    else:
        reason = "HTTP source requires transport and provenance review"

    return SourceAssessment(
        url=url,
        host=host,
        is_secure=is_secure,
        is_official_domain=is_official,
        reason=reason,
    )
