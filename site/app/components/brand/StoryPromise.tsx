export default function StoryPromise() {
  return (
    <section className="gsrs-story-promise" aria-labelledby="gsrs-story-promise-title">
      <div className="gsrs-story-promise__inner">
        <p className="gsrs-story-promise__eyebrow">A gallery with a voice</p>
        <h2 id="gsrs-story-promise-title">Every stone has a story.</h2>
        <p className="gsrs-story-promise__lead">
          We are building a more personal way to discover remarkable stones:
          beautiful specimens, thoughtful details, and stories told with warmth,
          curiosity, and character.
        </p>

        <div className="gsrs-story-promise__grid">
          <article>
            <span>01</span>
            <h3>See the specimen</h3>
            <p>Large imagery and a calm gallery put the stone itself at center stage.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Know its story</h3>
            <p>Origins, features, and memorable details make each piece more than a listing.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Meet its personality</h3>
            <p>Soon, selected stones will introduce themselves in their own distinctive voices.</p>
          </article>
        </div>

        <a className="gsrs-story-promise__link" href="/collections">
          Begin exploring
          <span aria-hidden="true"> →</span>
        </a>
      </div>
    </section>
  );
}