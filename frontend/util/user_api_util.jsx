export const edit = user => {
  return $.ajax({
    method: 'patch',
    url: `/api/users/${user.id}`,
    data: { user }
  });
};
