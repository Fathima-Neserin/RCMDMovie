document
  .getElementById("movie-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const genre = document.getElementById("genre").value;
    const duration = document.getElementById("duration").value;
    const mood = document.getElementById("mood").value;

    // Validation
    if (!genre || !duration || !mood) {
      alert("Please select all options before submitting!");
      return;
  }
    const recommendation = generateRecommendation(genre, duration, mood);

    document.getElementById("recommendation").innerHTML = recommendation;
  });

function generateRecommendation(genre, duration, mood) {
  const recommendations = {
    Comedy: {
      Short: {
        Relaxed:
          'Based on your preferences, we recommend watching "Freelancer" — a short comedy film that offers a glimpse into the world of a freelance artist (Babak Ganjei), juggling the compulsion of self-expression and the desperate need to not eat beans 12 days in a row. A fun and lighthearted watch for a relaxed mood!',
        Adventurous:
          'Based on your preferences, we recommend watching "Freelancer" — a short comedy film about a freelance artist (Babak Ganjei) navigating through creative challenges and avoiding a monotonous routine. A quirky and adventurous take on freelancing life!',
      },
      Medium: {
        Happy:
          "Based on your preferences, we recommend watching The Grand Budapest Hotel — a quirky comedy film with a runtime of 99 minutes, perfect for a happy mood. Enjoy this lighthearted, visually stunning adventure!",
        Relaxed:
          "Based on your preferences, we recommend watching The Nice Guys — a hilarious yet relaxed comedy with a runtime of 116 minutes. A perfect blend of humor and cool vibes.",
        Excited:
          "Based on your preferences, we recommend watching Deadpool — a fast-paced, action-packed comedy with a runtime of 108 minutes. Get ready for a thrilling yet hilarious ride!",
        Adventurous:
          "Based on your preferences, we recommend watching Jumanji: Welcome to the Jungle — an adventurous comedy with a runtime of 119 minutes. Get ready for a wild, fun ride!",
      },
      Long: {
        Happy:
          "Based on your preferences, we recommend watching 3 Idiots — a heartwarming and hilarious Indian comedy film with a runtime of 170 minutes. Perfect for a happy mood, this film combines humor with important life lessons.",
      },
    },
    Action: {
      Medium: {
        Happy:
          "Based on your preferences, we recommend watching The Avengers — an exciting action-packed superhero film with a runtime of 143 minutes. Perfect for a happy mood!",
        Relaxed:
          "Based on your preferences, we recommend watching The Nice Guys — a blend of action and comedy with a relaxed vibe, running for 116 minutes.",
        Excited:
          "Based on your preferences, we recommend watching John Wick — an intense and thrilling action film with a runtime of 101 minutes. Get ready for a heart-pounding experience!",
        Adventurous:
          "Based on your preferences, we recommend watching Mission: Impossible – Ghost Protocol — an action-adventure film with a runtime of 133 minutes. A perfect adventurous thrill ride!",
      },
      Long: {
        Happy:
          "Based on your preferences, we recommend watching The Dark Knight — a celebrated action masterpiece with a runtime of 152 minutes, perfect for a happy and action-filled mood!",
        Relaxed:
          "Based on your preferences, we recommend watching Wonder Woman — a blend of action, emotion, and relaxation with a runtime of 141 minutes.",
        Excited:
          "Based on your preferences, we recommend watching Mad Max: Fury Road — an adrenaline-fueled action film with a runtime of 120 minutes. Get ready for non-stop action!",
        Adventurous:
          "Based on your preferences, we recommend watching The Dark Knight Rises — a thrilling action-packed adventure with a runtime of 164 minutes. An epic journey that keeps you on the edge of your seat.",
      },
    },
    Drama: {
      Short: {
        Happy:
          'We recommend watching "Lunchbox" — an emotional and heartwarming Indian drama about two strangers connected through a lunchbox delivery mix-up. A perfect short film for a happy mood!',
        Relaxed:
          'We recommend watching "Waiting" — a soothing Indian drama about an unlikely friendship between two people waiting for their loved ones to recover. Perfect for a relaxed evening.',
        Excited:
          'We recommend watching "Masaan" — a gripping short Indian drama that takes you through emotional highs and lows with stellar performances.',
        Adventurous:
          'We recommend watching "Newton" — a satirical Indian drama about a government clerk on an adventurous journey to ensure free and fair elections in a conflict-ridden area.',
      },
      Medium: {
        Happy:
          'We recommend watching "English Vinglish" — an inspiring Indian drama about self-discovery and empowerment, perfect for a happy mood with a runtime of 134 minutes.',
        Relaxed:
          'We recommend watching "Kapoor & Sons" — a touching Indian family drama that balances humor and emotions with a runtime of 132 minutes.',
        Excited:
          'We recommend watching "Tamasha" — a vibrant and emotional Indian drama about love and finding oneself, running for 139 minutes.',
        Adventurous:
          'We recommend watching "Piku" — an adventurous yet heartfelt Indian drama about a quirky road trip exploring family dynamics and emotions.',
      },
      Long: {
        Happy:
          'We recommend watching "3 Idiots" — an inspiring Indian drama and comedy film with a runtime of 170 minutes. Perfect for a happy and thoughtful mood!',
        Relaxed:
          'We recommend watching "Swades" — a soothing Indian drama about self-realization and reconnecting with one’s roots, with a runtime of 189 minutes.',
        Excited:
          'We recommend watching "Lagaan" — an exciting Indian period drama about underdogs fighting for justice through a cricket match. Runtime: 224 minutes.',
        Adventurous:
          'We recommend watching "Dil Se" — a dramatic and adventurous Indian film about love and conflict with a runtime of 163 minutes.',
      },
    },
    Horror: {
      Short: {
        Relaxed:
          'We recommend watching "Tumbbad" — a visually stunning and atmospheric Indian horror film that blends mythology and greed in just 108 minutes.',
        Excited:
          'We recommend watching "Stree" — a short and entertaining Indian horror-comedy about a mysterious ghost haunting a village. A perfect mix of excitement and scares!',
        Adventurous:
          'We recommend watching "Pizza" — a thrilling Indian horror film with twists and turns packed into a short runtime. Get ready for an adventurous ride!',
      },
      Medium: {
        Happy:
          'We recommend watching "Bhool Bhulaiyaa" — a popular Indian horror-comedy with a runtime of 159 minutes, offering laughs and chills in equal measure!',
        Relaxed:
          'We recommend watching "Raaz" — a relaxing yet eerie Indian horror film exploring the supernatural with a runtime of 151 minutes.',
        Excited:
          'We recommend watching "13B" — a gripping Indian horror-thriller about a family haunted by their TV, with a runtime of 146 minutes.',
        Adventurous:
          'We recommend watching "Pari" — a spine-chilling Indian horror film that takes you on a supernatural adventure, running for 136 minutes.',
      },
      Long: {
        Happy:
          'We recommend watching "Bhool Bhulaiyaa 2" — a modern Indian horror-comedy sequel with a runtime of 145 minutes. Perfect for laughs and a happy mood!',
        Relaxed:
          'We recommend watching "Tumbbad" — a relaxing yet darkly atmospheric horror film that unfolds like a fable. Runtime: 108 minutes.',
        Excited:
          'We recommend watching "Raat" — a cult classic Indian horror film known for its eerie storytelling. Runtime: 127 minutes.',
        Adventurous:
          'We recommend watching "The House Next Door" — an Indian horror film about mystery and adventure, running for 136 minutes.',
      },
    },
    SciFi: {
      Short: {
        Relaxed:
          'We recommend watching "Cargo" — an Indian sci-fi film exploring life and afterlife aboard a spaceship, with a runtime of 113 minutes. Perfect for a relaxed mood.',
        Excited:
          'We recommend watching "OK Computer" — a short Indian sci-fi series blending humor, technology, and excitement. A quirky futuristic watch!',
        Adventurous:
          'We recommend watching "Mission Mangal" — a short but inspiring Indian sci-fi film about India’s ambitious Mars mission. Runtime: 130 minutes.',
      },
      Medium: {
        Happy:
          'We recommend watching "Koi Mil Gaya" — a heartwarming Indian sci-fi film with a runtime of 171 minutes. Perfect for a happy mood!',
        Relaxed:
          'We recommend watching "Robot" (Enthiran) — an Indian sci-fi film about artificial intelligence and emotions, perfect for a relaxed movie night. Runtime: 155 minutes.',
        Excited:
          'We recommend watching "2.0" — an exciting Indian sci-fi sequel about advanced robotics and technology, with a runtime of 148 minutes.',
        Adventurous:
          'We recommend watching "Ra.One" — an adventurous Indian sci-fi film about gaming, superheroes, and action, with a runtime of 156 minutes.',
      },
      Long: {
        Happy:
          'We recommend watching "PK" — an emotional yet humorous Indian sci-fi film about an alien on Earth, running for 153 minutes.',
        Relaxed:
          'We recommend watching "Tumbbad" — an Indian sci-fi film that blends fantasy and horror, running for 108 minutes.',
        Excited:
          'We recommend watching "Robot 2.0" — a visually stunning and exciting Indian sci-fi epic about robotics and technology. Runtime: 148 minutes.',
        Adventurous:
          'We recommend watching "Cargo" — an adventurous and unique Indian sci-fi journey aboard a spaceship. Runtime: 113 minutes.',
      },
    },
  };

  if (
    recommendations[genre] &&
    recommendations[genre][duration] &&
    recommendations[genre][duration][mood]
) {
    return recommendations[genre][duration][mood];
} else {
    return "Sorry, no movie recommendation found for your preferences. Please try another combination!";
}
}
