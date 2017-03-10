module ApplicationHelper
  def webpack_asset(path)
    host = Rails.application.config.action_controller.asset_host
    manifest = Rails.application.config.webpack_manifest
    path = manifest[path] if manifest && manifest[path].present?
    "#{host}/assets/#{path}"
  end
end
