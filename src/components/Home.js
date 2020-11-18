import "./Home.css";

function Home() {
  return (
    <div className="home_page">
      <div className="video_card">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/lNDZl73Gmu4"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="video_card_content">
          <h1>David Lutrick | Web Developer</h1>
          <p>
            Hi, I'm David Lutrick and I'm a web developer located here in Mesa,
            Arizona. In order to complete my projects, I implement html, css,
            and react. Some other technologies I'm familiar with are Java,
            MySQL, and SpringBoot for creating and utilizing APIs.
          </p>
          <p>If you'd like to know more, please watch the video above.</p>
        </div>
      </div>
      <div className="card">
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default Home;
