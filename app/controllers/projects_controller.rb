class ProjectsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :get_user

  def index
    p "=========="
    p @user
    p "=========="
    data = [
      {id: 1, name: 'Luigi', avatar_url: 'https://i.pinimg.com/originals/be/71/8d/be718d1db03995c6d24455c6ebd9143f.jpg'},
      {id: 2, name: 'Mario', avatar_url: 'https://i.pinimg.com/236x/68/f7/6e/68f76eaa71d54923f9ebca1414c73e46--mario.jpg'},
      {id: 3, name: 'Peach', avatar_url: 'https://pm1.narvii.com/6563/5abdcddcfec4fcb304534c88b530bbbfa04b5ebf_hq.jpg'},
      {id: 4, name: 'Toad', avatar_url: 'https://i.ya-webdesign.com/images/toad-transparent-face-mario-1.png'},
      {id: 5, name: 'Yoshi', avatar_url: 'https://www.nicepng.com/png/detail/350-3502424_neorigg-crit-le-mario-kart-yoshi-face.png'}
    ]
    render json: {status: 'SUCCESS', data: data}, status: :ok
    # render json: {status: 'SUCCESS', data: @projects}, status: :ok
  end
  #
  def show; end
  #
  def new
    @project = Project.new
  end
  #

  def create
    @project = Project.new(manager_id: @user.id, name: params[:project][:name])
    @project.save
    # respond_to do |format|
      # if @project.save
      #   flash[:success] = "Website was successfully created."
      #   render json: {status: 'SUCCESS', data: @project}, status: :ok
      # else
        # flash[:error] = "Please fill correct data."
        # format.json { render json: @project.errors, status: :unprocessable_entity }
      # end
    # end
    render json: {status: 'SUCCESS', data: @project}, status: :ok
  end
  #
  private
  def get_user
    @user = User.find_by(id: params[:user_id])
    # @project = Project.find_by(manager_id: params[:user_id])
    # flash.now[:error] = "User #{params[:id]} not found" if @user.blank?
    # redirect_to projects_path if @user.blank?
  end
end
