# Condor Trails — items for Al to confirm

This pull request switches the site wording to the agreed agent model: Condor Trails is the English-language sales front; the traveller books and pays Maria Kralewska Turismo y Aventura S.A.C. (the Operator); Condor earns a fee.

Nothing in this list is published as a confirmed Operator term. Each item is marked `TODO-ALCONFIRM` in an HTML comment in the site files. Visitor-facing text uses neutral wording only, such as: “Deposit and cancellation terms are set by our Peru operating partner and confirmed in your written quote.”

This branch is based on `main`, not on pull request 2 (`feat/peru-inquiry-form`). The Peru inquiry-form files were left unchanged to avoid merge conflicts.

---

## Commercial model

1. **Agreement with the Operator (terms.html, introduction).** Confirm in writing that Condor introduces travellers, the booking contract and payment are with the Operator, the Operator runs the trip, and Condor earns a fee — before these terms go live.

2. **Fee and paperwork (terms.html, §2.1).** Confirm the commercial basis (commission, net rates, or another fee), that the Operator will accept Condor-introduced bookings, and who issues the booking confirmation and invoice.

## Money and booking terms

3. **Deposit (terms.html, §2.3).** Operator deposit amount, timing, and whether it is refundable. Do not publish a percentage until the Operator confirms it. The old Condor Trails figure of a 25% non-refundable deposit paid to Condor has been removed.

4. **Balance (terms.html, §2.4).** When the balance is due, and whether a booking made close to departure must be paid in full immediately. The old “60 days before departure” rule has been removed.

5. **Payment methods (terms.html, §2.5).** Operator payment channels (bank transfer, cards, Peruvian e-invoice, or other), accepted currencies, and who bears conversion or bank fees. No public client-payment method was found on the Operator’s sites.

6. **Late payment (terms.html, §2.6).** Operator rules if a payment is late, including any right to cancel and keep a deposit.

7. **Cancellation by the traveller (terms.html, §4.1).** Operator cancellation scale, refund timing, and any non-refundable elements (Inca Trail permits, trains, peak-season hotels, internal flights, or similar). The old Condor Trails ladder (refund minus €100 / 50% / 100%) has been removed.

8. **Cancellation by the Operator (terms.html, §4.2).** What the Operator offers if it cancels (alternative trip, full refund, or other), and whether international flights or insurance are excluded.

9. **Price increases (terms.html, §3).** Operator rules if a confirmed price later changes. Do not restate EU Package Travel Directive 8% / 2% price-revision rights as Condor Trails’ own promise unless counsel or the Irish Aviation Authority (IAA) confirms they apply to this model.

## Insurance, changes, and trips cut short

10. **Insurance (terms.html, §5).** Whether the Operator requires travel insurance, any minimum cover, and whether the Operator provides any cover of its own. The old “mandatory for all Condor Trails travellers” rule has been softened until this is confirmed.

11. **Itinerary changes (terms.html, §6).** Operator remedies if a significant change is made before or during a trip.

12. **Trips cut short (terms.html, §11).** Operator policy if a trip is cut short by illness, weather, strikes, or other force majeure — credit, rebooking, refund, or none — and any costs already incurred.

13. **Complaints (terms.html, §12).** Operator complaints process, including any Peruvian Libro de Reclamaciones steps, and the inbox the Operator wants Condor to use.

14. **Governing law of the trip contract (terms.html, §14).** Law and jurisdiction for the contract with the Operator (possibly Peruvian, but not published). State it only in the written quote once confirmed. These website terms remain under Irish law for dealings with Condor Trails as introducing agent.

## Legal status in Ireland and the EU (high risk)

15. **Agent vs organiser (terms.html, §7.1).** The new wording describes the intended model: Condor is an introducing agent, not the organiser of the travel services. That is not a legal determination. Counsel or the IAA should confirm in writing whether Condor Trails could still be treated as an organiser or a travel agent under the EU Package Travel Directive 2015/2302 (S.I. No. 80/2019) or the Transport (Tour Operators and Travel Agents) Act 1982, including any licence or bond duty, before trips are sold. Using a Peruvian operator does not automatically remove Irish or EU duties.

16. **Package-travel rights and insolvency protection (terms.html, §7.3).** Do not claim that Condor Trails “accepts responsibility for the proper performance of all travel services” unless it is clear Condor is the organiser. Do not tell travellers that EU package-travel rights definitely do or do not apply. Confirm with counsel or the IAA (traveltrade@iaa.ie) and put the confirmed position in the written quote and, if needed, in a later terms update. How customer money paid to the Operator is protected if the Operator fails also needs a confirmed answer.

## Prices, programmes, and public details

17. **Published “from” prices and inclusions (terms.html, §3).** Confirm every published guide price and inclusion against the Operator’s current net rates and availability. This includes Classic Peru, Peru & Bolivia, the Inca Trail, jungle and culinary programmes, and any non-Peru itineraries still listed on the site (some of those destinations appear in the Operator’s own programmes; Ecuador, Galápagos and the Dominican Republic are less clearly evidenced and should be checked).

18. **Inca Trail, jungle, and Lima culinary cards (index.html, Signature Experiences).** The Operator publishes a classic 4-day / 3-night Inca Trail. The existing site card still shows a 5-day “reimagined” listing and price, left in place so we did not invent a replacement figure. Confirm duration, style, inclusions and price, and the same for jungle (Puerto Maldonado) and Lima culinary programmes, before treating those figures as current. The classic 4-day trek is now also mentioned as available on request.

19. **Operator contacts and certificate (terms.html, §16).** Which Operator phone and email Condor Trails should publish for travellers. Public sources list several (WhatsApp +51 999 399 944; older Lima numbers 01-461-4061 / 463-2100 / 462-2332; emails including pawel@mariakralewska.com.pe). Also confirm the current MINCETUR tourism certificate number before publishing one — the official directory row was stale and the certificate field was blank as of 18 November 2026 (Europe/Dublin). Do not use the pre-2020 Jesús María address. The published legal name, RUC 20501416241, and Lurigancho, Lima address are taken from the Operator’s current site and official tax records.

---

## Already done in this pull request (no action unless you disagree)

- `terms.html` rewritten for the agent model; the 25% deposit-to-Condor wording and the old cancellation ladder are gone.
- Homepage How It Works, About, contact intro, and related pricing lines updated.
- `chatbot.js` FAQ updated, including a deposit/cancellation answer that matches the terms.
- `quote.html` hero line updated so it does not imply Condor alone crafts and sells the trip.
- Forms are unchanged and still use the existing mailto pattern to info@condortrails.com.
- No files were deleted. This pull request is not merged. No DNS or GitHub Pages settings were changed.
