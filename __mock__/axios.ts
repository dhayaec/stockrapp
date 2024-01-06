// __mocks__/axios.ts
export default function axios() {
  return {
    get: jest.fn(),
    post: jest.fn(),
    // Add other necessary methods here
  }
}
