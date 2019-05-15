# VARIABLE=VALUE sh curl-scripts/auth/sign-out.sh

curl "https://tic-tac-toe-wdi-production.herokuapp.com/sign-out" \
  --include \
  --header "Authorization: Token token=${TOKEN}" \
  --request DELETE \

echo
