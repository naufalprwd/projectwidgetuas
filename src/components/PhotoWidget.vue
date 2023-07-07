<template>
    <div class="photo-widget">
      <h2>Photo</h2>
      <p>Pixabay is a vibrant creative community, sharing copyrights of free images and videos. 
        All content is released under the Pixabay License, which makes it safe to use without asking permission or rewarding the artist – even for commercial purposes. 
        Pixabay is a free image provider website from Germany. 
        There are 2.3 million free images and hundreds of thousands of assets such as illustrations, vectors, videos to music that you can download for free.</p>
      <h2>{{ title }}</h2>
      <img :src="photoUrl" :alt="title" />
      <button @click="getRandomPhoto">Load New Photo</button>

      <div class="comment">
        <br><hr>
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
        title: '',
        photoUrl: '',
      };
    },
    mounted() {
      this.getRandomPhoto();
    },
    methods: {
      async getRandomPhoto() {
        try {
          const apiKey = '38037020-2c48722c03be8437a05b588e6';
          const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=nature&image_type=photo&orientation=horizontal`;
          const response = await fetch(apiUrl);
          const data = await response.json();
          const randomIndex = Math.floor(Math.random() * data.hits.length);
          const randomPhoto = data.hits[randomIndex];
          this.title = randomPhoto.tags;
          this.photoUrl = randomPhoto.webformatURL;
        } catch (error) {
          console.error('Error fetching random photo:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  button{
  background: chocolate;
  color: white;
  border-color: chocolate;
}
  .photo-widget {
    border: 1px solid #ccc;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f2f2f2;
  }
  .photo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 500px;
    margin-top: 10px;
  }
  .photo-container img {
    max-width: 100%;
    max-height: 100%;
  }
  .photo-widget button {
    margin-top: 10px;
  }

  .comment{
    padding-top: 5%;
  }
  </style>