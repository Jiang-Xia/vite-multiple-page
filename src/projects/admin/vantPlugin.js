import { ConfigProvider,Button, Field, Form, Rate, Slider,NavBar } from 'vant'
export default (app) => {
  app.use(ConfigProvider)
  app.use(Button)
  app.use(Field)
  app.use(Form)
  app.use(Rate)
  app.use(Slider)
  app.use(NavBar)
}
