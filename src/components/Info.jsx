export default function Info() {
	return (
		<div className='info'>
			<img src='http://placekitten.com/317/317' alt='' />
			<h1>Laura Smith</h1>
			<h2>Software Engineer</h2>
			<div className="buttons">
        <button id='email'>
          <img src='/src/assets/Mail.png' alt='' />
          Email
        </button>
        <button id='linkedin'>
          <img src='/src/assets/linkedin.png' alt='' />
          LinkedIn
        </button>
      </div>
		</div>
	);
}