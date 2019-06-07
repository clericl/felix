# felix

felix is a clone of Facebook, a social media and networking application where users post and share text, photos, and other multimedia with other users as "friends."
Check it out [here](https://felixfb.herokuapp.com/#/)!

![splash-screenshot](https://github.com/clericl/felix/raw/master/app/assets/images/splash.png "Splash")

## Technologies

* Ruby on Rails
* PostgreSQL
* JavaScript
* React
* Redux
* HTML/CSS
* AWS S3
* Heroku

## Feature Highlights

felix follows Facebook in its list of features: the ability to create posts, comment on them, reply to comments, and like all of the above; a personalized news feed to display posts; user profiles with mini-feeds for content they're directly involved with; and much more.

### Signing Up and Logging In

Like with any modern web application, a user has to sign up for an account or log in with their existing credentials. What differs from app to app is how invalid credentials are handled. How does any given app tell you that the username you've chosen is already taken, or that the password you've entered is incorrect? What are the visual and graphical cues that are used? How are they interactive?

![sign-up-screenshot](https://github.com/clericl/felix/raw/master/app/assets/images/sign_up.png "Sign Up errors")

Answering those questions presented one of the biggest challenges of this project, especially as this laid the groundwork for how I designed every user-interactive feature to follow. In this particular example, invalid input fields are outlined with a red border and show an exclamation mark icon. However, when they're clicked on, the border and icon disappear and a tooltip with more details about the error appears. Managing the appearance and disappearance of each of these details was difficult, especially when multiple errors were involved.

The solution I implemented was having the tooltip exist regardless of whether there were any errors or not, and then have its visibility be toggled by specific errors passed up from the database. Switching between the tooltip and the border and icon occurred through a state change whenever the user interacted with the input field.

```
<input
    type="text"
    className={`login-input ${this.state.emailBorder ? "error-border" : ""}`}
    placeholder="Email or Phone Number"
    onChange={e => this.handleChange(e, "email")}
    onFocus={e => this.toggleError(e, "email")}
    onBlur={e => this.toggleError(e, "email")}
    value={this.state.email}
/>
<FormError
    type="email"
    text="The email or phone number you've entered doesn't match any account."
    displayBorder={this.state.emailBorder}
    displayError={this.state.emailError}
/>
```

### News Feed

felix users land on their News Feed upon logging in. The News Feed displays fresh and relevant content from the user's friends, updating whenever the user hits the bottom of the page for a seamless infinite scrolling experience.

![news-feed-screenshot](https://github.com/clericl/felix/raw/master/app/assets/images/news_feed.png "News Feed")

### Search

felix's search bar dynamically queries the database, autocompleting the user's query with the most relevant keywords from both users and their posts.

![search-screenshot](https://github.com/clericl/felix/raw/master/app/assets/images/search.png "Search")

Formatting these results correctly was an unexpectedly challenging exercise in string manipulation, especially with the necessary conversions between plaintext and HTML.

```
formatSearchResults(resultText) {
    let boldTextArray = resultText.split(this.props.query);
    boldTextArray = boldTextArray.map((segment, idx) => {
        if (idx !== 0) {
            return (
                <div className="search-index-chunk" key={idx}>
                    <p className="search-index-chunk-regular">{this.props.query}</p>
                    <p className="search-index-chunk-bold">{segment}</p>
                </div>
            )
        } else {
            return (
                <div className="search-index-chunk" key={idx}>
                    <p className="search-index-chunk-bold">{segment}</p>
                </div>
            )
        }
    });
    return boldTextArray;
}
```

### Profiles

Users have their own profiles, each displaying several things: an intro with the personal information they choose to share, a selection of their friends, and their personal Timeline, to which posts can be made by other users (or by themselves!)

![profile-screenshot](https://github.com/clericl/felix/raw/master/app/assets/images/profile.png "Profile")

### WIP Features

Future versions of felix will be packed with even more features. Already in progress are:

* Photos (and videos)
* Notifications
* Messaging
* Groups
* Pages
* Events
