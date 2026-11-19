# Condor Trails — items for Al to confirm (copy accuracy)

This pull request only fixes copy that was inaccurate or unverified. It does not change the agent-model wording in pull request 3.

Pull request 3 (`feat/agent-model-wording`) already has its own `docs/AL-REVIEW.md` with commercial and legal items. If both pull requests are merged, combine the two lists. This file covers only the copy-accuracy items below.

Nothing here invents a replacement figure. Visitor-facing prices that clash were left as they were, with a `TODO-ALCONFIRM` comment in the source.

---

## Prices and itineraries

1. **Classic Peru "from" price (trips/classic-peru.html, index.html, peru.html, and related-trip cards).** The trip page and homepage say from €1,690 per person. The Peru page lists the same-named 10-day itinerary at from €2,290. Do not quote either figure in ads or public posts until one Operator price is confirmed and the odd page is updated. Current text was left unchanged.

2. **Classic Peru JSON-LD price (trips/classic-peru.html).** Structured data still lists price 1850 with currency USD, leftover from the old USD pricing. It matches neither on-page EUR figure. Update it only after the Operator price is confirmed.

3. **Classic Peru itinerary clash (trips/classic-peru.html vs peru.html).** The trip page flies to Puno on day 9 and departs from Juliaca on day 10. The Peru page uses a bus via La Raya on day 8, visits Sillustani on day 10, then flies to Lima. The trip page JSON-LD itinerary is different again (it includes Rainbow Mountain). Harmonise before marketing the 10 days as one trip. Current text was left unchanged.

4. **Peru page hero "from" price (peru.html).** The hero says from €2,290 per person, which matches the Classic Peru card on that page but clashes with the trip page and homepage, and is higher than cheaper itineraries listed on the same page (including Highland Heritage). Confirm the lead "from" price.

## Railway and Highland Heritage

5. **Highland Heritage rail days (peru.html).** The Ferrocarril Central Andino tourist train runs on set dates only, not as a regular April to October service. Visitor-facing copy now says rail days are subject to the published schedule, and that a road or flight alternative can be arranged. Confirm how each departure will be handled if no tourist-train date is published.

6. **Sunday Feria Dominical (peru.html, Highland Heritage day 3).** Not changed in this pull request, but the market only falls on a Sunday. Confirm whether departures are timed to include it, or soften that line later.

## Inca Trail

7. **Inca Trail card and 4-day trek (index.html, Signature Experiences).** The site did not list a 4-day Inca Trail as an instantly bookable product. It listed a 5-day "Inca Trail, Reimagined" add-on from €4,490, which read as bookable. That card now says it is available on request, subject to permit availability via an authorised agency, and notes Tu Boleto, the 750 visitors a day cap, the February closure, and that the classic 4-day trail can be arranged on the same basis. The existing 5-day / €4,490 figures were kept (now marked on request) so no new price was invented. Confirm duration, style, inclusions and price against the Operator's classic 4-day / 3-night trail (or this luxury variant), and confirm a named authorised agency for Tu Boleto permits, before treating the figures as current.

## Unverified homepage claims

8. **"2,000+" Happy Travelers and "98%" Would Recommend (index.html trust bar).** Both are unverified. They have been commented out, not deleted. Restore only if Al confirms the figures are real.

9. **"Classic Peru · 14 days" testimonial (index.html, Sarah and James Mitchell).** Unverified, and Classic Peru is listed as 10 days elsewhere. The card has been commented out, not deleted, and one carousel dot was hidden so the remaining five cards still work. Restore only if Al confirms this is a real guest review.

10. **Other homepage testimonials (index.html).** David Chen, Emma Blackwell, Marcus and Lisa Rivera, Hannah Johansson, and Robert and Patricia Hayes were left visible because they were not named in the brief. They have also not been verified. Confirm them before treating the section as real guest stories.

11. **Other trust-bar figures still visible (index.html).** "15+" Years Experience and "50+" Local Expert Guides were not hidden, because they were not named in the brief. They have also not been verified.

---

## Already done in this pull request (no action unless you disagree)

- The "All Inclusive" badge on Classic Peru was replaced with "Selected meals included", which matches the listed inclusions (daily breakfast and four dinners). International flights, insurance, personal expenses and tips remain listed as not included. The same badge still appears on some other trip pages and was left untouched.
- "World's highest railway" was changed to "the highest railway in the Americas." Galera is shown as 4,781 m. Highland Heritage now says the tourist train runs on set dates only.
- No files were deleted. This pull request is not merged. No DNS or GitHub Pages settings were changed.
