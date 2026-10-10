    // Data using 12-hour format AM/PM
    const routineData = [
      { id: 1, start: "05:35 PM", end: "06:00 PM", title: "Maghrib Salah", note: "Try to reach the mosque as early as possible; perform the Salah with khushūʿ, and do not forget to make duʿāʾ before the adhān.", type: "salah" },
      { id: 2, start: "06:00 PM", end: "06:10 PM", title: "Surah Waqia", note: "Recite or listen to Sūrah al-Wāqiʿah with attentiveness, seeking Allah’s reward and allowing its verses to deepen your reflection upon the Hereafter.", type: "quran" },
      { id: 3, start: "06:10 PM", end: "06:30 PM", title: "Deep dive into Qur'an ", note: "Deep study of the Qur’an—its meaning, tafsīr, context, lessons, and reflections—with the aim of understanding, contemplating, and applying its guidance.", type: "quran" },
      { id: 4, start: "06:30 PM", end: "08:15 PM", title: "Study", note: "Study with focus and consistency; every moment spent learning is an investment in the person you are becoming. The whole of life, from the moment you are born to the moment you die, is a process of learning.", type: "study" },
      { id: 5, start: "08:15 PM", end: "08:50 PM", title: "I'sha Salah", note: "Hasten to Prayer, Hasten to Success. Hasten to the prayer with humility and khushūʿ; respond to Allah’s call and remember that true success begins with Ṣalāh.", type: "salah" },
      { id: 6, start: "08:50 PM", end: "09:05 PM", title: "Dinner", note: "Warm food, warm hearts. Take a nourishing break, eat with gratitude, and return refreshed—food for the body, strength for the work, and gratitude to Allah.", type: "dinner" },
      { id: 7, start: "09:05 PM", end: "09:20 PM", title: "Kitab Ta'lim", note: " Kitāb al-Taʿlīm, seeking beneficial knowledge, strengthening my understanding of Dīn, and striving to turn what I learn into righteous action. O Allah! I ask You for beneficial knowledge, and a good Halal provision, and actions which are accepted.", type: "talim" }, 
      { id: 8, start: "09:20 PM", end: "11:59 PM", title: "Study", note: "Deep, focused study with consistency and discipline; building knowledge, strengthening understanding, and making every moment of learning count. The more that you read, the more things you will know. Learning is an active process. We learn by doing. Only knowledge that is used sticks in your mind.", type: "study" },
      { id: 9, start: "12:00 AM", end: "12:20 AM", title: "Prepare for Sleep", note: "Refreshing, performing Wuḍūʾ, drinking water, reciting or listening to Sūrah al-Mulk, and completing my adhkār before sleep.", type: "fresh" },
      { id: 10, start: "12:20 AM", end: "02:00 AM", title: "Sleep", note: "Getting sufficient, restful sleep to restore my body and mind, recharge my energy, and prepare myself for the day ahead. Sleep is the single most effective thing we can do to reset our brain and body health each day.", type: "rest" },
      { id: 11, start: "02:00 AM", end: "02:30 AM", title: "Starting The Day's", note: "Wake Up! Fresh, Oju, Tahaj'jud Salah, Make Du'a; Tahajjud is that secret conversation with Allah that illuminates your heart.", type: "salah" },
      { id: 12, start: "02:30 AM", end: "02:40 AM", title: "Qur'an Rflections", note: "Read at least one reflection from QuranReflect.com with deeper understanding.", type: "quran" },
      { id: 13, start: "02:40 AM", end: "02:55 AM", title: "Light Snack", note:"Eat Something; refueling with a short break. Sometimes it may be a cup of tea or coffee!", type: "break" },
      { id: 14, start: "02:55 AM", end: "05:05 AM", title: "Study", note:"Deep dive into study. Deep, focused study with full concentration, strengthening my understanding and steadily building the knowledge.", type: "study" },
      { id: 15, start: "05:05 AM", end: "05:30 AM", title: "Fajr Salah", note: "The two rakats of Fajr Sunnat Salah before Two rakats of compulsory Salah— is better than the world and everything in it.", type: "salah" },
      { id: 16, start: "05:30 AM", end: "05:40 AM", title: "Surah Ya'asin", note: "Recitation/Listen Surah Ya'asin. It is narrated that reciting Surah Yasin in the morning leads to the fulfillment of needs for that day.", type: "quran" },
      { id: 17, start: "05:40 AM", end: "07:20 AM", title: "Study", note: "Increasing Knowledge; Wherever the art of Medicine is loved, there is also a love of Humanity. Deep, focused study to increase my knowledge, strengthen my medical understanding, and grow in both competence and compassion as a future physician, insha'Allah.", type: "study" },
    { id: 18, start: "07:20 AM", end: "07:40 AM", title: "Ready to go to college", note: "Preparing for college—freshening up, taking a bath, performing Wuḍūʾ, dressing in my uniform, and getting everything ready for the day.", type: "fresh" },
      { id: 19, start: "07:40 AM", end: "07:45 AM", title: "2 Raka'h Nafl Salah", note: "Two units of prayer, offered sincerely, humbly, and with certainty in Allah, can change your life, insha'Allah", type: "salah" },
      { id: 20, start: "07:45 AM", end: "02:00 PM", title: "College Time", note: "Breakfast, College, Study, Exam, Launch, Dhuhr Salah (If possible) ❝Point to be noted in friday leaving hostel to catch out the Jummah Khutbah  starting from 12:30, (trying to pray Jummah Salah in Kejir More Mosque) insha'Allah.❞", type: "college" },
      { id: 21, start: "02:00 PM", end: "02:30 PM", title: "Back to room", note: "Fresh, Dhuhr Salah and Recitation or Listen Surah Ar-Rahman (if missed before)", type: "fresh" },

      { id: 22, start: "02:30 PM", end: "04:15 PM", title: "Study", note: "Never give up on a dream just because of the time it will take to accomplish it. ❝Point to be noted sometimes there no class or exam or college or academic even off day, so study remain continued too in that particular times but times may variable for taking gushl, salah, breakfast and so on!❞", type: "study" },
      { id: 23, start: "04:15 PM", end: "05:45 PM", title: "Asr Salah", note: "Asr Time; Reconnect, rejuvenate, and remain grounded.", type: "salah" },
    { id: 24, start: "04:45 PM", end: "05:35 PM", title: "Dawa'h Time", note: "Dawa'h, Coding, Programming, Project, Communication, Messaging, Meets With De'eni Companion's, Watching Videos Lectures, Thesis, Researchs, Creative Thinking, Writing, Reading...  ❝Point to be noted, in sunday from 6:00 (PM) to 07:15 (PM) → Qur'an Tafsir D'ars/Class❞", type: "dawah" }
      
      
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
    const currentActivityTime = document.getElementById('current-activity-time');
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
        currentActivityName.childNodes[0].textContent = activeItem.title;
currentActivityTime.textContent = `${activeItem.start} – ${activeItem.end}`;
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
