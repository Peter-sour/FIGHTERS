    // Mood data with messages and tips
    const moodData = {
        "happy": {
            emoji: "😊",
            messages: [
                "Your happiness brightens everyone's day! Keep that positive energy flowing!",
                "It's wonderful to see you happy! Celebrate the little joys today.",
                "Your positive mood is contagious! Spread that happiness around!"
            ],
            tips: [
                "Take a moment to appreciate what made you happy today.",
                "Share your joy with someone else to multiply it.",
                "Journal about this happy moment to revisit later."
            ]
        },
        "okay": {
            emoji: "😐",
            messages: [
                "Feeling okay is perfectly fine! Take it one step at a time.",
                "Steady and balanced - that's a good foundation for your day.",
                "Sometimes 'okay' is exactly where we need to be."
            ],
            tips: [
                "Consider one small thing that might boost your mood a little.",
                "Try a quick walk or stretch to refresh your energy.",
                "Reflect on what would help you feel more than just okay."
            ]
        },
        "sad": {
            emoji: "😔",
            messages: [
                "It's okay to feel sad. Your feelings are valid and important.",
                "Sadness is part of being human. Be gentle with yourself today.",
                "Remember that this feeling, like all feelings, will pass."
            ],
            tips: [
                "Try reaching out to someone you trust to talk about how you feel.",
                "Do something small and comforting for yourself right now.",
                "Practice self-compassion - treat yourself as you would a good friend."
            ]
        },
        "stressed": {
            emoji: "😫",
            messages: [
                "Take a deep breath. You're doing the best you can.",
                "Stress is a sign that you care, but remember to care for yourself too.",
                "One step at a time - you don't have to solve everything at once."
            ],
            tips: [
                "Try the 4-7-8 breathing technique: inhale for 4, hold for 7, exhale for 8.",
                "Break down what's stressing you into smaller, manageable tasks.",
                "Schedule a short break to reset your mind."
            ]
        },
        "anxious": {
            emoji: "😰",
            messages: [
                "You're stronger than your anxiety. Take it one moment at a time.",
                "Your feelings are real, but they don't define you or your capabilities.",
                "Remember to ground yourself in the present moment."
            ],
            tips: [
                "Try the 5-4-3-2-1 technique: name 5 things you see, 4 you feel, 3 you hear, 2 you smell, and 1 you taste.",
                "Focus on what you can control right now, even if it's just your breath.",
                "Consider writing down your worries to get them out of your head."
            ]
        },
        "tired": {
            emoji: "😴",
            messages: [
                "Rest is not a luxury, it's essential. Honor your body's needs.",
                "It's okay to slow down when you need to. Your wellbeing matters.",
                "Tiredness is your body communicating with you - try to listen."
            ],
            tips: [
                "Even a 10-minute power nap can help restore your energy.",
                "Check in with yourself about what kind of tired you are - physical, mental, or emotional?",
                "Consider what you might need to remove from your plate today."
            ]
        }
    };

    // DOM elements
    const moodOptions = document.querySelectorAll('.mood-option');
    const trackButton = document.getElementById('trackButton');
    const modal = document.getElementById('moodModal');
    const closeButton = document.querySelector('.close-button');
    const modalEmoji = document.getElementById('modalEmoji');
    const modalTitle = document.getElementById('modalTitle');
    const modalMessage = document.getElementById('modalMessage');
    const modalTip = document.getElementById('modalTip');

    let selectedMood = null;

    // Select mood
    moodOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Remove selected class from all options
            moodOptions.forEach(opt => opt.classList.remove('selected'));
            
            // Add selected class to clicked option
            option.classList.add('selected');
            
            // Store selected mood
            selectedMood = option.getAttribute('data-mood');
            
            // Enable track button
            trackButton.disabled = false;
        });
    });

    // Track mood button click
    trackButton.addEventListener('click', () => {
        if (selectedMood) {
            const moodInfo = moodData[selectedMood];
            
            // Randomly select a message and tip
            const randomMessage = moodInfo.messages[Math.floor(Math.random() * moodInfo.messages.length)];
            const randomTip = moodInfo.tips[Math.floor(Math.random() * moodInfo.tips.length)];
            
            // Update modal content
            modalEmoji.textContent = moodInfo.emoji;
            modalTitle.textContent = `Your Mood: ${selectedMood}`;
            modalMessage.textContent = randomMessage;
            modalTip.textContent = `Tip: ${randomTip}`;
            
            // Show modal
            modal.style.display = 'flex';
        }
    });

    // Close modal
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });