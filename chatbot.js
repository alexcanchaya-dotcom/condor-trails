/* ============================================================
   CHATBOT – Condor Trails FAQ Assistant
   ============================================================ */
(function() {
  'use strict';

  // ── FAQ Knowledge Base ──────────────────────────────────────
  const FAQ = [
    // -- Destinations & Trips --
    {
      keywords: ['peru', 'machu picchu', 'cusco', 'lima', 'sacred valley', 'inca'],
      q: 'What can I see in Peru?',
      a: 'Peru is our flagship destination. Highlights include Machu Picchu, the Sacred Valley, Cusco\'s colonial streets, the Nazca Lines, Lake Titicaca, the Amazon rainforest near Iquitos, and the culinary scene in Lima. We also cover off-the-beaten-path gems like Kuelap in the north and the Huanca highlands. <a href="./peru.html">Explore our Peru page →</a>'
    },
    {
      keywords: ['bolivia', 'uyuni', 'salt flat', 'la paz', 'altiplano'],
      q: 'What about Bolivia?',
      a: 'Bolivia offers the breathtaking Salar de Uyuni salt flats — the world\'s largest natural mirror — plus the otherworldly Altiplano, La Paz (the highest capital city), and the ancient ruins of Tiwanaku. Best visited May through October for clear skies on the salt flats.'
    },
    {
      keywords: ['patagonia', 'torres', 'paine', 'glacier', 'el chalten', 'argentina south', 'chile south'],
      q: 'Tell me about Patagonia',
      a: 'Patagonia straddles Chile and Argentina and is one of the planet\'s last great wildernesses. You\'ll find Torres del Paine, Perito Moreno Glacier, El Chaltén\'s hiking trails, and the Carretera Austral. Best season is November to March (Southern Hemisphere summer). We design treks from day hikes to the full W Circuit.'
    },
    {
      keywords: ['colombia', 'cartagena', 'bogota', 'medellin', 'coffee', 'lost city'],
      q: 'What can I do in Colombia?',
      a: 'Colombia is booming as a travel destination. Explore Cartagena\'s colourful old town, trek to the Lost City (Ciudad Perdida), visit the coffee region (Eje Cafetero), discover Bogotá\'s street art and food scene, or relax on the Caribbean coast. The country is safe, welcoming, and incredibly diverse.'
    },
    {
      keywords: ['ecuador', 'galapagos', 'quito', 'amazon', 'andes'],
      q: 'What does Ecuador offer?',
      a: 'Ecuador packs four worlds into one small country: the Galápagos Islands, the Andes highlands around Quito, the Amazon basin, and the Pacific coast. The Galápagos are a once-in-a-lifetime wildlife experience — we work with carefully vetted local operators for island-hopping or cruise itineraries.'
    },
    {
      keywords: ['argentina', 'buenos aires', 'mendoza', 'iguazu', 'wine', 'tango'],
      q: 'What about Argentina?',
      a: 'Argentina offers Iguazú Falls (one of the world\'s great natural wonders), Buenos Aires\' tango culture and steakhouses, Mendoza\'s Malbec wine country, the Lake District around Bariloche, and of course Patagonia in the south. It\'s a country of extraordinary contrasts and flavours.'
    },
    {
      keywords: ['best time', 'when to visit', 'season', 'weather', 'month', 'rainy', 'dry'],
      q: 'When is the best time to visit?',
      a: 'It depends on your destination:<br>• <b>Peru</b>: May–Sep (dry season in the highlands); Lima is year-round<br>• <b>Bolivia (Uyuni)</b>: May–Oct for the dry salt crust; Jan–Mar for the mirror effect<br>• <b>Patagonia</b>: Nov–Mar (summer)<br>• <b>Colombia</b>: Dec–Mar or Jul–Aug<br>• <b>Ecuador/Galápagos</b>: Year-round; Jan–May warmer seas<br>• <b>Argentina</b>: Oct–Apr for most regions<br><br>We\'ll help you pick the perfect window for your trip.'
    },
    {
      keywords: ['itinerary', 'how long', 'days', 'week', 'duration', 'trip length', 'how many days'],
      q: 'How long should my trip be?',
      a: 'We recommend a minimum of 7–10 days for a single country, or 14–21 days if you want to combine two destinations (e.g. Peru + Bolivia). A full South America circuit covering 3+ countries works best at 3–4 weeks. Every itinerary is custom-built — we\'ll work with your available time and must-see priorities.'
    },
    {
      keywords: ['recommend', 'first time', 'beginner', 'suggestion', 'where should', 'which country'],
      q: 'Where do you recommend for a first-timer?',
      a: 'For a first South America trip, we often suggest <b>Peru</b> — it has the widest range of experiences (culture, history, food, nature) in one country. If you\'re drawn to wildlife, <b>Ecuador + Galápagos</b> is unbeatable. For trekking, <b>Patagonia</b> is extraordinary. We\'ll help match your interests to the right destination.'
    },
    {
      keywords: ['food', 'cuisine', 'eat', 'restaurant', 'culinary', 'ceviche', 'cooking', 'recipe'],
      q: 'What about the food scene?',
      a: 'South America\'s culinary scene is world-class. Peru is ranked among the top food destinations globally — from Lima\'s Michelin-worthy restaurants to street-side ceviche. We offer culinary-focused itineraries including cooking classes, market tours, and local home meals. Check out <a href="./recipes.html">our recipes page</a> for a taste of what\'s to come.'
    },

    // -- Practical Travel Info --
    {
      keywords: ['visa', 'passport', 'entry', 'document'],
      q: 'Do I need a visa?',
      a: 'Most English-speaking nationals (UK, US, Canada, Australia, EU) can enter Peru, Bolivia, Colombia, Ecuador, Argentina, and Chile <b>visa-free</b> for 90 days as tourists. Bolivia sometimes requires a visa for US citizens (available on arrival). Always check your specific nationality 3 months before travel — we\'ll send you a personalised checklist once you book.'
    },
    {
      keywords: ['vaccine', 'vaccination', 'health', 'yellow fever', 'malaria', 'medical', 'medicine'],
      q: 'What vaccinations do I need?',
      a: 'Recommended vaccines vary by destination:<br>• <b>Yellow fever</b>: Required for the Amazon regions of Peru, Bolivia, Ecuador, and Colombia<br>• <b>Hepatitis A & B</b>: Recommended for all destinations<br>• <b>Typhoid</b>: Recommended if visiting rural areas<br>• <b>Malaria prophylaxis</b>: Advisable for Amazon/jungle regions<br><br>Consult your travel doctor 6–8 weeks before departure. We\'ll flag exactly which vaccines your specific itinerary calls for.'
    },
    {
      keywords: ['altitude', 'altitude sickness', 'soroche', 'high altitude', 'acclimat'],
      q: 'How do I deal with altitude sickness?',
      a: 'Altitude is a real factor in the Andes. Cusco sits at 3,400m, La Paz at 3,640m, and some treks go above 4,500m. Our tips:<br>• Arrive a day early to acclimatise<br>• Stay hydrated and eat light<br>• Coca tea (mate de coca) genuinely helps<br>• Consider acetazolamide (Diamox) — ask your doctor<br>• We always build acclimatisation days into highland itineraries'
    },
    {
      keywords: ['safe', 'safety', 'danger', 'crime', 'secure', 'risk'],
      q: 'Is South America safe for tourists?',
      a: 'Yes — with sensible precautions. The destinations we operate in are well-established tourist routes with strong safety records. We work exclusively with vetted local guides, trusted transport providers, and reputable accommodations. Standard travel sense applies: keep valuables secure, use registered taxis, and avoid unlit areas at night. We provide detailed safety briefings for every trip.'
    },
    {
      keywords: ['pack', 'packing', 'bring', 'luggage', 'clothes', 'gear', 'what to wear'],
      q: 'What should I pack?',
      a: 'Essentials vary by itinerary, but generally:<br>• <b>Layers</b>: Andean weather changes fast — bring a warm fleece, rain jacket, and sun hat<br>• <b>Good walking shoes</b>: Broken-in hiking boots for treks, comfortable trainers for cities<br>• <b>Sun protection</b>: High-SPF sunscreen, sunglasses (UV is intense at altitude)<br>• <b>Day pack</b>: A 20–30L backpack for day excursions<br>• <b>Insect repellent</b>: Essential for jungle/Amazon regions<br><br>We send a detailed packing list tailored to your specific trip once you book.'
    },
    {
      keywords: ['money', 'currency', 'cash', 'atm', 'credit card', 'payment', 'exchange', 'tip', 'tipping'],
      q: 'What about money and tipping?',
      a: 'Each country uses its own currency (Peruvian Sol, Boliviano, Colombian Peso, etc.), but US Dollars are widely accepted as backup. ATMs are available in cities and tourist towns. We recommend:<br>• Carry some local cash for markets and small vendors<br>• Credit cards work in hotels, restaurants, and shops in cities<br>• Tipping: 10% at restaurants, $5–10/day for guides, $2–5/day for drivers<br><br>We provide a currency and budget guide with your trip pack.'
    },
    {
      keywords: ['language', 'spanish', 'english', 'speak', 'communicate', 'quechua'],
      q: 'Do I need to speak Spanish?',
      a: 'Not at all. Our guides are fluent English speakers, and tourist areas across South America generally have some English. That said, learning a few basic Spanish phrases goes a long way and locals appreciate the effort. In Peru, you may also hear Quechua — our founder Aleksander\'s ancestral language. We\'ll teach you a few fun phrases before your trip.'
    },
    {
      keywords: ['internet', 'wifi', 'phone', 'sim', 'connectivity', 'signal'],
      q: 'Will I have internet access?',
      a: 'Wi-Fi is available in most hotels, hostels, and cafés in cities and tourist towns. In remote areas (Amazon, high-altitude treks, rural highlands), connectivity is limited or nonexistent. We recommend:<br>• Buy a local SIM card on arrival (cheap and easy)<br>• Download offline maps (Google Maps or maps.me)<br>• Embrace the digital detox on treks — it\'s part of the experience'
    },

    // -- Booking & General --
    {
      keywords: ['book', 'booking', 'reserve', 'how to book', 'get started', 'plan'],
      q: 'How do I book a trip?',
      a: 'Simple — fill out the <a href="#contact">contact form</a> with your travel dates, interests, and group size. We\'ll get back to you within 24 hours with a personalised proposal. There\'s no commitment until you\'re happy with the plan. You can also call us at <a href="tel:+353857604985">+353 85 760 4985</a>.'
    },
    {
      keywords: ['price', 'cost', 'budget', 'expensive', 'how much', 'afford', 'cheap'],
      q: 'How much does a trip cost?',
      a: 'Every trip is custom, so pricing varies. As a rough guide:<br>• <b>Budget-friendly</b>: from ~$80–120/day (hostels, local transport, group tours)<br>• <b>Mid-range</b>: ~$150–250/day (boutique hotels, private guides, domestic flights)<br>• <b>Premium</b>: $300+/day (luxury lodges, exclusive experiences, helicopter transfers)<br><br>We build trips to match your budget. Tell us what you\'re comfortable with and we\'ll make it work.'
    },
    {
      keywords: ['who', 'about', 'condor trails', 'team', 'aleksander', 'founder', 'story'],
      q: 'Who is behind Condor Trails?',
      a: 'Condor Trails was founded by Aleksander Canchaya, who has Quechua heritage from the Huanca people of Junín, Peru, and is based in Dublin, Ireland. His family runs a travel agency in Peru (tourinca.com), specialising in South American journeys. Every trip we design draws on deep local knowledge, family connections, and genuine passion for the continent.'
    },
    {
      keywords: ['group', 'solo', 'family', 'couple', 'friends', 'private'],
      q: 'Do you cater to solo travellers?',
      a: 'Absolutely. We design trips for solo travellers, couples, families, and groups of friends. Every journey is private and tailor-made — you\'ll never be lumped into a generic group tour. Solo travellers love our trips because our local guides make you feel like you\'re travelling with a knowledgeable friend, not a tour company.'
    },
    {
      keywords: ['contact', 'email', 'phone', 'call', 'reach', 'talk'],
      q: 'How can I contact you?',
      a: 'You can reach us several ways:<br>• <b>Phone</b>: <a href="tel:+353857604985">+353 85 760 4985</a><br>• <b>Email</b>: via our <a href="#contact">contact form</a><br>• <b>Social</b>: Find us on Instagram and YouTube<br><br>We typically respond within 24 hours.'
    }
  ];

  // ── Quick-reply categories shown at start and after each answer ──
  const MENU_CHIPS = [
    { label: '🇵🇪 Peru', keyword: 'peru' },
    { label: '🌍 Destinations', keyword: 'recommend' },
    { label: '📅 Best time to visit', keyword: 'best time' },
    { label: '💉 Vaccinations', keyword: 'vaccine' },
    { label: '⛰️ Altitude tips', keyword: 'altitude' },
    { label: '🛡️ Is it safe?', keyword: 'safe' },
    { label: '🎒 Packing list', keyword: 'pack' },
    { label: '💰 Trip costs', keyword: 'price' },
    { label: '📞 Contact', keyword: 'contact' },
  ];

  // ── Fuzzy matching ──────────────────────────────────────────
  function findAnswer(input) {
    const q = input.toLowerCase().replace(/[^a-z0-9\s]/g, '');
    const words = q.split(/\s+/).filter(w => w.length > 2);
    let best = null, bestScore = 0;

    for (const entry of FAQ) {
      let score = 0;
      for (const kw of entry.keywords) {
        const kwLower = kw.toLowerCase();
        // exact substring in input
        if (q.includes(kwLower)) { score += 3; continue; }
        // any word match
        for (const w of words) {
          if (kwLower.includes(w) || w.includes(kwLower)) { score += 1.5; }
        }
      }
      if (score > bestScore) { bestScore = score; best = entry; }
    }

    if (bestScore >= 1.5) return best.a;
    return 'I\'m not sure about that one — but our team definitely can help. <a href="#contact">Send us a message</a> or call <a href="tel:+353857604985">+353 85 760 4985</a> and we\'ll get back to you within 24 hours.';
  }

  // ── Build DOM ───────────────────────────────────────────────
  function init() {
    // Trigger button
    const trigger = document.createElement('button');
    trigger.className = 'chat-trigger';
    trigger.setAttribute('aria-label', 'Open chat assistant');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.innerHTML = `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`;

    // Panel
    const panel = document.createElement('div');
    panel.className = 'chat-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'Chat assistant');
    panel.innerHTML = `
      <div class="chat-header">
        <div class="chat-header-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
        </div>
        <div class="chat-header-text">
          <div class="chat-header-title">Condor Trails Guide</div>
          <div class="chat-header-subtitle">Ask us anything about South America</div>
        </div>
      </div>
      <div class="chat-messages" aria-live="polite"></div>
      <div class="chat-input-area">
        <input class="chat-input" type="text" placeholder="Type your question..." aria-label="Type your question">
        <button class="chat-send" aria-label="Send message" disabled>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        </button>
      </div>
    `;

    document.body.appendChild(trigger);
    document.body.appendChild(panel);

    const messages = panel.querySelector('.chat-messages');
    const input = panel.querySelector('.chat-input');
    const sendBtn = panel.querySelector('.chat-send');

    // ── Helpers ──
    function addBubble(text, type) {
      const el = document.createElement('div');
      el.className = `chat-bubble ${type}`;
      el.innerHTML = text;
      messages.appendChild(el);
      messages.scrollTop = messages.scrollHeight;
      return el;
    }

    function addChips(chips) {
      const wrap = document.createElement('div');
      wrap.className = 'chat-chips';
      chips.forEach(c => {
        const btn = document.createElement('button');
        btn.className = 'chat-chip';
        btn.textContent = c.label;
        btn.addEventListener('click', () => handleQuery(c.keyword, c.label));
        wrap.appendChild(btn);
      });
      messages.appendChild(wrap);
      messages.scrollTop = messages.scrollHeight;
    }

    function showTyping() {
      const el = document.createElement('div');
      el.className = 'chat-typing';
      el.innerHTML = '<span></span><span></span><span></span>';
      messages.appendChild(el);
      messages.scrollTop = messages.scrollHeight;
      return el;
    }

    function removeAllChips() {
      messages.querySelectorAll('.chat-chips').forEach(c => c.remove());
    }

    function handleQuery(keyword, displayText) {
      removeAllChips();
      addBubble(displayText || keyword, 'user');
      const typing = showTyping();

      setTimeout(() => {
        typing.remove();
        const answer = findAnswer(keyword);
        addBubble(answer, 'bot');
        // Show follow-up chips after a pause
        setTimeout(() => addChips(MENU_CHIPS), 300);
      }, 500 + Math.random() * 400);
    }

    // ── Toggle panel ──
    let isOpen = false;
    let welcomed = false;

    trigger.addEventListener('click', () => {
      isOpen = !isOpen;
      panel.classList.toggle('open', isOpen);
      trigger.setAttribute('aria-expanded', String(isOpen));
      trigger.classList.add('dot-hidden');

      if (isOpen && !welcomed) {
        welcomed = true;
        setTimeout(() => {
          addBubble('Hey there 👋 I\'m the Condor Trails assistant. I can answer questions about destinations, travel tips, and planning your South America trip. What would you like to know?', 'bot');
          setTimeout(() => addChips(MENU_CHIPS), 300);
        }, 200);
      }

      if (isOpen) input.focus();
    });

    // Close on Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && isOpen) trigger.click();
    });

    // ── Input handling ──
    input.addEventListener('input', () => {
      sendBtn.disabled = !input.value.trim();
    });

    function submit() {
      const text = input.value.trim();
      if (!text) return;
      input.value = '';
      sendBtn.disabled = true;
      handleQuery(text, text);
    }

    sendBtn.addEventListener('click', submit);
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') submit();
    });
  }

  // Boot
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
