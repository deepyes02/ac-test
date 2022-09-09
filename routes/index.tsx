/** @jsx h */
import { h } from "preact";

export default function Home() {
  return (
    <div>
      <a href="https://www.active-connector.com/">
        <img
          src="/logo.png"
          alt="Active Connector company logo"
        />
      </a>
      <h2>
        Skill Test (Software Engineer)
      </h2>
	  <label for="custom_input">
		<input title="custom Input" placeholder="type your input" type="text" name="custom_input" />
	  </label>
    </div>
  );
}
