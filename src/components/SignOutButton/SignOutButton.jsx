import React from "react"
import { Auth } from "aws-amplify"
import { SignOutButtonWrapper } from "./SignOutButton.styles";
export const SignOutButton = () => {
    const signOut =  async () => {
        try {
            await Auth.signOut();
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <SignOutButtonWrapper>
            <div onClick={signOut}>
            Sign out
        </div>
        </SignOutButtonWrapper>
        
    )
}