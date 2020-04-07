module API 
    class UsersController < ApplicationController
        def index
            users = ['user 1','user 2']

            render json: { users: users }
        end
    end
end