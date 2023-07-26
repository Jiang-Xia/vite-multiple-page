import { ConfigProvider,Button, Field, Form, Rate, Slider,NavBar } from 'vant'
import type { App } from 'vue'
export default (app: App) => {
  app.use(ConfigProvider)
  app.use(Button)
  app.use(Field)
  app.use(Form)
  app.use(Rate)
  app.use(Slider)
  app.use(NavBar)
}
