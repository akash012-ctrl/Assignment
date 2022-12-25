## Navbar component

The Navbar component is a navbar with two items: "Brand" and "GetUsers". When the "GetUsers" item is clicked, the component makes an API call to retrieve a list of users and displays them using the ShowUsers component. The component also includes a loading indicator, which is displayed while the component is in the process of making the API call and retrieving the user data. If the component has not yet made the API call or if the call was unsuccessful and no user data is available, a message is displayed to the user to click on "GetUsers" to retrieve the data.

## ShowUsers Component

The ShowUsers component is a component for displaying a list of users. It receives a list of users as a prop and displays each user in a card, with the user's avatar, name, and email address.

## Loader Component

The Loader component is a component for displaying a loading indicator. It uses the BeatLoader component from the "react-spinners" library to display a spinner.
