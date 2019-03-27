# movieql

Movie API with Graphql

## Over-fetching

요청한 영역의 정보보다 많은 정보를 서버에서 받음(쓸모없는 정보까지 얻음)

/users/ GET

## Under-fetching

앱을 처음 시작하려면 아래 세가지를 요청해야 한다. 즉 3가지 요청이 3번 오고가야 앱이 시작된다

/user/1/ GET
/feed/
/notifications/

## Graphql

Graphql을 사용해 이 문제들을 해결할 수 있다. Graphql에선 URL은 존재하지 않음. 한개의 Query로 만들 수 있다

query {
feed {
comments
likeNumber
}
notification {
isRead
}
user {
userName
profilePic
}
}

자신이 요청한 정보들만 받을 수 있고, 원하는 방식으로 조정 가능

## schema

받거나 건내줄 정보에 대한 서술
