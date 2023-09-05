function TweetForm(){
  const placeHolder = "TWEET HERE BUDDY";

  return (
    <section className="newtweet">
      <form method="post" action="/tweets" className="newtweet__form">
        <textarea className="form__textarea" name="text" placeholder={placeHolder}></textarea>
        <input onClick={(event) => {event.preventDefault()}} type="submit" value="Tweet" className="form__input" />
        <span className="form__counter">140</span>
      </form>
    </section>
  );
}

export default TweetForm;