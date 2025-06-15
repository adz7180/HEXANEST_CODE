// Route guard to block access unless subscribed
export default function authGuard(to, from, next) {
  const isSubscribed = localStorage.getItem('subscribed') === 'true'
  if (isSubscribed || to.name === 'Payment' || to.name === 'ExplorePreview') {
    next()
  } else {
    next({ name: 'Payment' })
  }
}
