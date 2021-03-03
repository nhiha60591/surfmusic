import Resource from './resource'

class UserResource extends Resource {
  constructor() {
    super('users')
  }
}

export { UserResource as default }
