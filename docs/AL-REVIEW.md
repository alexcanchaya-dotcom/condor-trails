# Condor Trails — items for Al to confirm (copy accuracy)

This pull request only fixes copy that was inaccurate or unverified. It does not change the agent-model wording in pull request 3.

Pull request 3 (`feat/agent-model-wording`) already has its own `docs/AL-REVIEW.md` with commercial and legal items. If both pull requests are merged, combine the two lists. This file covers only the copy-accuracy items below.

Nothing here invents a replacement figure. Visitor-facing prices that clash were left as they were, with a `TODO-ALCONFIRM` comment in the source.

---

## Prices and itineraries

1. **Classic Peru "from" price (trips/classic-peru.html, index.html, peru.html, and related-trip cards).** The trip page and homepage say from [price hidden] per person. The Peru page lists the same-named 10-day itinerary at from [price hidden]. Do not quote either figure in ads or public posts until one Operator price is confirmed and the odd page is updated. Current text was left unchanged.

2. **Classic Peru JSON-LD price (trips/classic-peru.html).** The leftover structured-data offer has now been removed, along with on-page guide prices, until the Operator confirms a figure.

3. **Classic Peru itinerary clash (trips/classic-peru.html vs peru.html).** The trip page flies to Puno on day 9 and departs from Juliaca on day 10. The Peru page uses a bus via La Raya on day 8, visits Sillustani on day 10, then flies to Lima. The trip page JSON-LD itinerary is different again (it includes Rainbow Mountain). Harmonise before marketing the 10 days as one trip. Current text was left unchanged.

4. **Peru page hero "from" price (peru.html).** The hero says from [price hidden] per person, which matches the Classic Peru card on that page but clashes with the trip page and homepage, and is higher than cheaper itineraries listed on the same page (including Highland Heritage). Confirm the lead "from" price.

## Railway and Highland Heritage

5. **Highland Heritage rail days (peru.html).** The Ferrocarril Central Andino tourist train runs on set dates only, not as a regular April to October service. Visitor-facing copy now says rail days are subject to the published schedule, and that a road or flight alternative can be arranged. Confirm how each departure will be handled if no tourist-train date is published.

6. **Sunday Feria Dominical (peru.html, Highland Heritage day 3).** Not changed in this pull request, but the market only falls on a Sunday. Confirm whether departures are timed to include it, or soften that line later.

## Inca Trail

7. **Inca Trail card and 4-day trek (index.html, Signature Experiences).** The site did not list a 4-day Inca Trail as an instantly bookable product. It listed a 5-day "Inca Trail, Reimagined" add-on from [price hidden] which read as bookable. That card now says it is available on request, subject to permit availability via an authorised agency, and notes Tu Boleto, the 750 visitors a day cap, the February closure, and that the classic 4-day trail can be arranged on the same basis. The existing 5-day / [price hidden] figures were kept (now marked on request) so no new price was invented. Confirm duration, style, inclusions and price against the Operator's classic 4-day / 3-night trail (or this luxury variant), and confirm a named authorised agency for Tu Boleto permits, before treating the figures as current.

## Homepage claims confirmed fictitious (19 Nov 2026)

8. **Trust bar (index.html).** On 19 November 2026 (Europe/Dublin), Al confirmed that the remaining "15+" Years Experience and "50+" Local Expert Guides figures are fictitious, as are the already-hidden "2,000+" Happy Travelers and "98%" Would Recommend figures. The whole trust bar is now commented out, not deleted, so the page is not left with an empty bar. The hero scroll previously targeted #trust and now goes to #destinations. Real, sourced figures may replace this later.

9. **All homepage testimonials (index.html).** On 19 November 2026, Al confirmed that the remaining testimonials are fictitious: David Chen, Emma Blackwell, Marcus and Lisa Rivera, Hannah Johansson, and Robert and Patricia Hayes, as well as the already-hidden Sarah and James Mitchell "Classic Peru · 14 days" card. The whole testimonials section is now commented out, not deleted, so the page is not left with an empty carousel. The carousel script exits cleanly when that markup is absent. Real guest reviews may replace this later.

10. **Search for real testimonials on tourinca.com (19 Nov 2026).** Al said real testimonials from his parents' Peru agency, Maria Kralewska Turismo y Aventura S.A.C. (tourinca.com), may be used. A same-day search found **no published customer testimonials with a reviewer name** that could be placed in the carousel. Nothing was invented, and no third-party forum post was used. Sources checked:

    - https://tourinca.com and https://www.tourinca.com (homepage only; `products.html` is a 404)
    - The linked current site https://www.mariakralewska.com.pe/ (Polish home, English `/en/home/`, Spanish `/es/inicio/`, all 30 WordPress pages, posts, comments, and the empty `project` content type)
    - The linked sister site http://www.peru-wakacje.pl (unreachable, HTTP 500, as on 18 November)
    - Older linked paths on mariakralewska.com.pe (`/index_ingles.htm`, `/foty`) also returned HTTP 500
    - No TripAdvisor or Google review listing for this agency was found (this matches the 18 November research in `/workspace/condor/tourinca-summary.md`)
    - Facebook (https://www.facebook.com/MARIA.KRALEWSKA) and Instagram are linked from tourinca.com, but no published, copyable customer testimonial with a reviewer name was retrieved from those pages
    - Third-party forum threads (for example globtroter.pl and forum.gazeta.pl) were not used, because they are not published on tourinca.com or on a review page it links to

    **Quotes used: none.** The testimonials section stays hidden until real, named reviews are provided or published on the operator's site.

11. **Other review-like content left in place (not Condor social proof).** A site-wide check found no JSON-LD `aggregateRating` or `Review` blocks, and no Condor TripAdvisor badge. The following were left visible because they are not Condor traveller-count, rating, or testimonial claims:

    - Blog posts that cite TripAdvisor scores for third-party hotels and restaurants (for example in Punta Sal and at the Museo Larco café)
    - Star icons on `recipes.html`, which mark recipe difficulty, not guest reviews
    - A "TripAdvisor" option in the "How did you hear about us?" list on `quote.html`
    - The word TripAdvisor in the privacy policy, as an example of a third-party site
    - "50+ pages of insider tips" in a blog lead-magnet line, which is a document length, not a traveller count

---

## Already done in this pull request (no action unless you disagree)

- The "All Inclusive" badge on Classic Peru was replaced with "Selected meals included", which matches the listed inclusions (daily breakfast and four dinners). International flights, insurance, personal expenses and tips remain listed as not included. The same badge still appears on some other trip pages and was left untouched.
- "World's highest railway" was changed to "the highest railway in the Americas." Galera is shown as 4,781 m. Highland Heritage now says the tourist train runs on set dates only.
- On 19 November 2026, the fictitious trust bar and the whole testimonials section were commented out, not deleted, after Al confirmed they were not real. No replacement testimonials were added, because none were found on tourinca.com or its linked public review pages.
- No files were deleted. This pull request is not merged. No DNS or GitHub Pages settings were changed.
