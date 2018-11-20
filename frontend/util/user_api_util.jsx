
export const edit = user => {
  return $.ajax({
    method: 'patch',
    url: `/api/users/${user.id}`,
    data: { user }
  });
};

export const fetchUser = id => {
  return $.ajax({
    method: 'get',
    url: `/api/users/${id}`
  });
};

export const fetchUsers = () => {
  return $.ajax({
    method: 'get',
    url: `/api/users/`
  });
};
