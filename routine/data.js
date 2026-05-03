    // Data using 12-hour format AM/PM
    const routineData = [
      { id: 1, start: "06:30 PM", end: "07:00 PM", title: "Maghrib Salah", note: "Try to present mosque as soon as possible; never forget making du'a before aj'an", type: "salah" },
      { id: 2, start: "07:00 PM", end: "07:10 PM", title: "Surah Waqia", note: "Recitation/Listen", type: "quran" },
      { id: 3, start: "07:10 PM", end: "07:30 PM", title: "Deep dive into Qur'an ", note: "Qur'an Study, Meaning, Tafsir, Tadabbur, Lessons, Reflections", type: "quran" },
      { id: 4, start: "07:30 PM", end: "08:15 PM", title: "Study", note: "The whole of life, from the moment you are born to the moment you die, is a process of learning.", type: "study" },
      { id: 5, start: "08:15 PM", end: "08:45 PM", title: "I'sha Salah", note: "Hasten to Prayer, Hasten to Success", type: "salah" },
      { id: 6, start: "08:45 PM", end: "09:00 PM", title: "Dinner", note: "Warm food, warm hearts.", type: "dinner" },
      { id: 7, start: "09:00 PM", end: "09:15 PM", title: "Kitab Ta'lim", note: "O Allah! I ask You for beneficial knowledge, and a good Halal provision, and actions which are accepted.", type: "talim" }, 
      { id: 8, start: "09:15 PM", end: "12:00 AM", title: "Study", note: "The more that you read, the more things you will know. Learning is an active process. We learn by doing. Only knowledge that is used sticks in your mind.", type: "study" },
      { id: 9, start: "12:00 AM", end: "12:20 AM", title: "Prepare for Sleep", note: "Fresh, Oju, Drink Water, Recite/Listen Surah Mulk,  Adhkar before sleeping.", type: "fresh" },
      { id: 10, start: "12:20 AM", end: "02:00 AM", title: "Sleep", note: "Sleep is the single most effective thing we can do to reset our brain and body health each day.", type: "rest" },
      { id: 11, start: "02:00 AM", end: "02:30 AM", title: "Starting The Day's", note: "Wake Up! Fresh, Oju, Tahaj'jud Salah, Make Du'a; Tahajjud is that secret conversation with Allah that illuminates your heart.", type: "salah" },
      { id: 12, start: "02:30 AM", end: "02:35 AM", title: "Qur'an Rflections", note: "Read at least one reflection from QuranReflect.com with deeper understanding.", type: "quran" },
      { id: 13, start: "02:35 AM", end: "03:35 AM", title: "Study", note: "Deep dive into study", type: "study" },
      { id: 14, start: "03:35 AM", end: "03:40 AM", title: "Light Snack", note: "Eat Something; refueling with a short break.", type: "break" },
      { id: 15, start: "03:40 AM", end: "04:45 AM", title: "Study", note: "Again deep dive into study.", type: "study" },
      { id: 16, start: "04:45 AM", end: "05:10 AM", title: "Fajr Salah", note: "The two rakats of Fajr Sunnat Salah, is better than the world and everything in it.", type: "salah" },
      { id: 17, start: "05:10 AM", end: "05:20 AM", title: "Surah Ya'asin", note: "Recitation/Listen Surah Ya'asin. It is narrated that reciting Surah Yasin in the morning leads to the fulfillment of needs.", type: "quran" },
      { id: 18, start: "05:20 AM", end: "07:30 AM", title: "Study", note: "Increase Knowledge; Wherever the art of Medicine is loved, there is also a love of Humanity.", type: "study" },
      { id: 19, start: "07:20 AM", end: "07:40 AM", title: "Ready to go to college", note: "Prepare for college, Fresh, Take Bath, Oju, Wear uniforms.", type: "fresh" },
      { id: 20, start: "07:40 AM", end: "07:45 AM", title: "2 Raka'h Nafl Salah", note: "Two units of prayer, offered sincerely, humbly, and with certainty in Allah, can change your life, insha'Allah", type: "salah" },
      { id: 21, start: "07:45 AM", end: "02:00 PM", title: "College Time", note: "Breakfast, College, Study, Exam, Launch, Dhuhr Salah (If possible)", type: "college" },
      { id: 22, start: "02:00 PM", end: "02:15 PM", title: "Back to room", note: "Fresh, Dhuhr Salah (if missed)", type: "fresh" },
      { id: 23, start: "02:15 PM", end: "02:30 PM", title: "Travelling", note: "On the way, journey to go to school.", type: "travelling" },
      { id: 24, start: "02:30 PM", end: "03:45 PM", title: "Take Class", note: "Teaching is not my profession, but it's an art of knowledge.", type: "school" },
      { id: 25, start: "03:45 PM", end: "04:10 PM", title: "Travelling", note: "On the way; back to room.", type: "travelling" },
      { id: 26, start: "04:10 PM", end: "05:00 PM", title: "Study", note: "Never give up on a dream just because of the time it will take to accomplish it.", type: "study" },
      { id: 27, start: "05:00 PM", end: "05:30 PM", title: "Asr Salah", note: "Asr Time; Reconnect, rejuvenate, and remain grounded.", type: "salah" },
      { id: 28, start: "05:30 PM", end: "06:30 PM", title: "Dawa'h Time", note: "Dawa'h, Coding, Programming, Project, Communication, Messaging, Meets With De'eni Companion's, Watching Videos Lectures, Thesis, Researchs, Creative Thinking, Writing, Reading...  ❝Point to be noted in Thursday from 6:15 to 08:00 → Markaj ║  In Friday from 5:00 to 08:00 → Gasht ║  In Sunday from 6:15 to 08:00 → Tafsir Class❞", type: "dawah" }
      
      
    ];
    
    // Helper: Convert "HH:MM AM/PM" to total minutes from start of day for logic
    function getMinutes(timeStr) {
      const [time, modifier] = timeStr.split(' ');
      let [hours, minutes] = time.split(':').map(Number);
      
      if (hours === 12) {
        hours = (modifier === 'AM') ? 0 : 12;
      } else if (modifier === 'PM') {
        hours += 12;
      }
      
      return hours * 60 + minutes;
    }
    
    const timelineContainer = document.getElementById('timeline-container');
    const statusBar = document.getElementById('status-bar');
    const currentActivityName = document.getElementById('current-activity-name');
    const currentNote = document.getElementById('current-note');
    const progressBar = document.getElementById('progress-bar');
    const timerText = document.getElementById('timer-text');
    
    function renderTimeline() {
      routineData.forEach((item) => {
        const card = document.createElement('div');
        card.className = `card ${item.type}`;
        card.setAttribute('data-index', item.id);
        card.id = `card-${item.id}`;
        
        const noteHtml = item.note ? `<div class="notes">${item.note}</div>` : '';
        
        card.innerHTML = `
                <div class="time-badge">${item.start} - ${item.end}</div>
                <div class="activity-name">${item.title}</div>
                ${noteHtml}
            `;
        timelineContainer.appendChild(card);
      });
    }
    
    function updateStatus() {
      const now = new Date();
      const nowTotalMinutes = now.getHours() * 60 + now.getMinutes();
      let activeItem = null;
      
      routineData.forEach(item => {
        let start = getMinutes(item.start);
        let end = getMinutes(item.end);
        if (nowTotalMinutes >= start && nowTotalMinutes < end) {
          activeItem = item;
        }
      });
      
      document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
      
      if (activeItem) {
        const activeCard = document.getElementById(`card-${activeItem.id}`);
        if (activeCard) activeCard.classList.add('active');
        
        statusBar.style.display = 'block';
        currentActivityName.innerText = activeItem.title;
        if (activeItem.note) {
          currentNote.innerText = activeItem.note;
          currentNote.style.display = 'inline-block';
        } else {
          currentNote.style.display = 'none';
        }
        
        let start = getMinutes(activeItem.start);
        let end = getMinutes(activeItem.end);
        let totalDuration = end - start;
        let elapsed = nowTotalMinutes - start;
        let percent = (elapsed / totalDuration) * 100;
        let remaining = totalDuration - elapsed;
        
        progressBar.style.width = `${percent}%`;
        timerText.innerText = `${remaining} min left`;
      } else {
        statusBar.style.display = 'none';
      }
    }
    
    renderTimeline();
    updateStatus();
    setInterval(updateStatus, 3000); // Check every 3 seconds
