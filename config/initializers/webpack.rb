webpack_assets_path =
  Rails.root.join('public', 'assets', 'webpack-manifest.json')

Rails.application.config.webpack_manifest =
  if File.exist?(webpack_assets_path)
    JSON.parse(File.read(webpack_assets_path))
  end
