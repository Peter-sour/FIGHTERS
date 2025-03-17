  // Exercise Buttons Functionality
  const exerciseButtons = document.querySelectorAll('.exercise-btn');
    
  if (exerciseButtons.length > 0) {
      exerciseButtons.forEach(button => {
          button.addEventListener('click', function() {
              const exerciseCard = this.closest('.exercise-card');
              const exerciseTitle = exerciseCard.querySelector('.exercise-title').textContent;
              
              // Show exercise in progress
              this.textContent = 'In Progress...';
              
              // Simulate exercise in progress
              setTimeout(() => {
                  alert(`${exerciseTitle} completed! Great job taking care of your mental health.`);
                  this.textContent = 'Start Exercise';
                  
                  // Update wellness journey progress
                  updateWellnessJourney();
              }, 3000);
          });
      });
  }
  
  // Function to update wellness journey progress
  function updateWellnessJourney() {
      const progressDays = document.querySelectorAll('.progress-day:not(.completed)');
      if (progressDays.length > 0) {
          progressDays[0].classList.add('completed');
      }
  }
  