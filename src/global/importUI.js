import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'

// elementui全部引入
// import Element from 'element-ui'
// Vue.use(Element)

// 按需引入
import {
    Input,
    Col,
    Row,
    Select,
    Radio,
    Checkbox,
    Form,
    FormItem,
    Drawer,
    Button,
    Table,
    TableColumn,
    Pagination,
    Message,
    MessageBox,
    Notification
} from 'element-ui'

Vue.use(Input);
Vue.use(Col);
Vue.use(Row);
Vue.use(Select);
Vue.use(Radio);
Vue.use(Checkbox);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Drawer);
Vue.use(Button);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;