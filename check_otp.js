AuthenticationFlowError = Java.type("org.keycloak.authentication.AuthenticationFlowError");

function authenticate(context) {
    var isOtp = session.userCredentialManager().isConfiguredFor(realm, user, "otp");
    if (!isOtp) {
        user.addRequiredAction("CONFIGURE_TOTP");
    }
    context.success();
}
