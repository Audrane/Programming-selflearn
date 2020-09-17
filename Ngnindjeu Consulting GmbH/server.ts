import * as express from "express";

let __dirname;

const router: express.Express = express();
router.listen(8080);
router.use(express.urlencoded({extended: false}));
router.use(express.json());

router.use("/html", express.static(__dirname + "html"));
router.use("/css", express.static(__dirname + "/css"));
router.use("/scripts", express.static(__dirname + "/scripts"));

router.get("/", (req: express.Request, res: express.Response) => {
        res.status(200);
        res.sendfile(__dirname + "/html/index.html");
    }
);