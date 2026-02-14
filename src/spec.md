# Specification

## Summary
**Goal:** Regenerate the three Portfolio/Recent Work project card thumbnail images with a consistent premium minimal aesthetic and update the Portfolio section to reference the new image filenames.

**Planned changes:**
- Create three updated premium minimal portfolio thumbnails (1200x900), distinct but visually consistent as a set, saved as new static assets under `frontend/public/assets/generated`.
- Update `frontend/src/components/marketing/PortfolioSection.tsx` to use the new portfolio image paths for the three project cards only.

**User-visible outcome:** The Home page Portfolio/Recent Work section displays three refreshed, premium minimal thumbnails (no broken images), while the layout and hover behavior remain unchanged.
