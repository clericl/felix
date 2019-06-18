class Api::PhotosController < ApplicationController

    def create
        @photo = Photo.new(photo_params)
        if @photo.save
            render :show
        else
            render json: @photo.errors.full_messages, status: 422
        end
    end

    def batch
        @photos = Photo.where(
            "photoable_id = ? AND photoable_type = ?",
            params[:photoable_id],
            params[:photoable_type]
        )

        render :batch
    end

    private

    def photo_params
        params.require(:photo).permit(:photoable_type, :photoable_id, :photo)
    end

end