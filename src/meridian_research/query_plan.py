"""Utilities for planning auditable web-research tasks.

This module does not call a search provider. It creates deterministic plans that
can later be executed by an approved adapter such as SerpAPI or Google Search
Grounding.
"""

from dataclasses import dataclass, field
from datetime import date
from urllib.parse import urlparse


@dataclass(frozen=True)
class ResearchRequest:
    question: str
    language: str = "en"
    region: str | None = None
    domains: tuple[str, ...] = ()
    max_queries: int = 3


@dataclass(frozen=True)
class SourceRecord:
    url: str
    title: str
    accessed_on: date
    notes: str = ""

    def __post_init__(self) -> None:
        parsed = urlparse(self.url)
        if parsed.scheme not in {"http", "https"} or not parsed.netloc:
            raise ValueError("url must be an absolute http(s) URL")
        if not self.title.strip():
            raise ValueError("title must not be empty")


@dataclass
class ResearchPlan:
    request: ResearchRequest
    queries: list[str] = field(default_factory=list)
    sources: list[SourceRecord] = field(default_factory=list)

    def add_source(self, source: SourceRecord) -> None:
        if source.url not in {item.url for item in self.sources}:
            self.sources.append(source)


def build_query_plan(request: ResearchRequest) -> ResearchPlan:
    """Build a deterministic first-pass query plan.

    The function intentionally does not claim that a query was executed. It
    only prepares candidate queries for a later, authorized search adapter.
    """

    question = " ".join(request.question.split())
    if not question:
        raise ValueError("question must not be empty")
    if request.max_queries < 1:
        raise ValueError("max_queries must be at least 1")

    queries = [question]
    if request.domains:
        queries.extend(f"site:{domain} {question}" for domain in request.domains)
    if request.region:
        queries.append(f"{question} {request.region}")

    deduplicated: list[str] = []
    for query in queries:
        if query not in deduplicated:
            deduplicated.append(query)

    return ResearchPlan(request=request, queries=deduplicated[: request.max_queries])
