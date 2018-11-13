export const login = user => {
  return $.ajax({
    method: 'post',
    url: 'api/users',
    data: { user }
  });
};
