# Specification

## Summary
**Goal:** Reduce the header brand text size on mobile so it fits without overflowing, while keeping the current desktop appearance.

**Planned changes:**
- Update only the header brand text `<span>` (SiteHeader, XPath: `/html/body/div/div/header/div/button/div/span`) to use a smaller font size on small/mobile viewports.
- Preserve existing desktop sizing and styling (md and up remains visually equivalent to the current `text-2xl` appearance).

**User-visible outcome:** On mobile, the header brand text fits within the header without overflow or layout issues, while desktop styling remains unchanged.
