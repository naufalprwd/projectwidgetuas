<template>
  <div class="stopwatch-widget">
    <h1>Stopwatch</h1>
    <p>{{ formatTime }}</p>
    <div>
      <button @click="startStopwatch" :disabled="isRunning">Start</button>
      <button @click="stopStopwatch" :disabled="!isRunning">Stop</button>
      <button @click="resetStopwatch">Reset</button>
    </div>
      <div class="comment">
        <hr>
        <h2>Leave the comment</h2>
        <p>Your email address will not published. Required fields are marked*</p>
        <form action="">
          <label for="username">Name*:</label>
          <input type="text" name="username" required>
          <label for="username"> Email*:</label>
          <input type="email" name="email" required>
          <br> <br>
          <label for="username">Website:</label>
          <input type="text" name="website">
          <label for="username"> Comment:</label>
          <input type="text" name="comment">
          <br> <br>
          <input type="submit">
        </form>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRunning: false,
      startTime: null,
      elapsedTime: 0,
    };
  },
  computed: {
    formatTime() {
      const milliseconds = this.elapsedTime % 1000;
      const seconds = Math.floor(this.elapsedTime / 1000) % 60;
      const minutes = Math.floor(this.elapsedTime / 60000) % 60;
      const hours = Math.floor(this.elapsedTime / 3600000);

      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
    },
  },
  methods: {
    startStopwatch() {
      if (!this.isRunning) {
        this.isRunning = true;
        this.startTime = Date.now();

        this.timerInterval = setInterval(() => {
          this.elapsedTime = Date.now() - this.startTime;
        }, 10);
      }
    },
    stopStopwatch() {
      if (this.isRunning) {
        this.isRunning = false;
        clearInterval(this.timerInterval);
      }
    },
    resetStopwatch() {
      this.isRunning = false;
      clearInterval(this.timerInterval);
      this.elapsedTime = 0;
    },
  },
};
</script>

<style scoped>
.stopwatch-widget {
  border: 1px solid #ccc;
  padding: 20px;
  background:  #f2f2f2;
  padding-top: 10%;
}

.stopwatch-widget h2 {
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
}

.stopwatch-widget p {
  color: #666;
  font-size: 18px;
  margin-bottom: 10px;
}

.stopwatch-widget button {
  padding: 10px 20px;
  background-color: chocolate;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 5px;
}

.stopwatch-widget button:hover {
  background-color: rgb(162, 82, 25);
}

.stopwatch-widget button:disabled {
  background-color: #ccc;
  color: #999;
  cursor: not-allowed;
}
.comment{
    padding-top: 10%;
  }
</style>