import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  public async postsByUser({ auth }: HttpContextContract) {
    const user = await auth.authenticate();
    await user.load("posts");
    const posts = user.posts;
    return posts;
  }

  public async forumsByUser({ auth }: HttpContextContract) {
    const user = await auth.authenticate();
    await user.load("forums");
    const forums = user.forums;

    return forums;
  }
}
