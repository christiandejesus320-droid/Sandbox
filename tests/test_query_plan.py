from datetime import date

import pytest

from meridian_research import ResearchRequest, SourceRecord, build_query_plan


def test_build_query_plan_is_deterministic_and_bounded() -> None:
    request = ResearchRequest(
        question="MCP tools security",
        region="US",
        domains=("modelcontextprotocol.io", "modelcontextprotocol.io"),
        max_queries=3,
    )

    plan = build_query_plan(request)

    assert plan.queries == [
        "MCP tools security",
        "site:modelcontextprotocol.io MCP tools security",
        "MCP tools security US",
    ]
    assert len(plan.queries) <= request.max_queries


def test_empty_question_is_rejected() -> None:
    with pytest.raises(ValueError, match="question"):
        build_query_plan(ResearchRequest(question="   "))


def test_source_record_requires_absolute_http_url_and_title() -> None:
    with pytest.raises(ValueError, match="absolute http"):
        SourceRecord(url="example.com", title="Example", accessed_on=date.today())

    with pytest.raises(ValueError, match="title"):
        SourceRecord(url="https://example.com", title=" ", accessed_on=date.today())


def test_plan_deduplicates_sources() -> None:
    plan = build_query_plan(ResearchRequest(question="agent routing"))
    source = SourceRecord(
        url="https://example.com/research",
        title="Research note",
        accessed_on=date(2026, 8, 16),
    )

    plan.add_source(source)
    plan.add_source(source)

    assert plan.sources == [source]
