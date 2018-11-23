export const sendFriendRequest = friendship => {
  
  return $.ajax({
    method: 'post',
    url: 'api/friendships',
    data: { friendship }
  });
}

export const acceptFriendRequest = friendship => {
  
  return $.ajax({
    method: 'patch',
    url: `api/friendships/${friendship.id}`,
    data: { friendship }
  });
}

export const deleteFriend = friendshipId => {
  return $.ajax({
    method: 'delete',
    url: `api/friendships/${friendshipId}`
  });
}
