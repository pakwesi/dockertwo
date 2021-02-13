import graphene
import graphql_jwt
import tracks.schema
import users.schema
import pictures.schema

class Query(users.schema.Query,pictures.schema.Query,  tracks.schema.Query, graphene.ObjectType):
    pass

class Mutation(users.schema.Mutation,tracks.schema.Mutation,pictures.schema.Mutation, graphene.ObjectType,):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()
    revoke_token = graphql_jwt.Revoke.Field()
    
    
    delete_token_cookie = graphql_jwt.DeleteJSONWebTokenCookie.Field()

    delete_refresh_token_cookie = graphql_jwt.DeleteRefreshTokenCookie.Field()



schema = graphene.Schema(query=Query, mutation=Mutation)