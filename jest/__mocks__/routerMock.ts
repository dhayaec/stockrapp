jest.mock('next/router', () => ({
  useRouter() {
    return {
      pathname: '/',
    }
  },
}))
