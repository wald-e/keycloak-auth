AuthenticationFlowError = Java.type("org.keycloak.authentication.AuthenticationFlowError");

function authenticate(context) {
    var grpCnt = user.getGroupsCount();
    if (grpCnt == 0) {
        context.failure(AuthenticationFlowError.USER_DISABLED);
        return;
    }
    context.success();
}
