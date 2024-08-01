import { ModeToggle } from "@/components/theme-toggle";
import { initialProfile } from "@/lib/initial-profile";
import { db } from "@/lib/db";
import { auth, currentUser, EmailAddress } from "@clerk/nextjs/server";

const SetupPage = async () => {
  const profile = await initialProfile();
  if (!profile) {
    return auth().redirectToSignIn();
  }
  else {
    return(
      <body>
      <div>
        <ModeToggle />
      </div>
      <h1>Home Page</h1>
      </body>
    );
  }
}

export default SetupPage;

