import { initialProfile } from "@/lib/initial-profile";
import { auth, currentUser, EmailAddress } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


const SetupPage = async () => {
  const profile = await initialProfile();
  if (!profile) {
    return auth().redirectToSignIn();
  }
  else {
    return redirect("/channels");
  }
}

export default SetupPage;
