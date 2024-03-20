import EditorWorker from "../../node_modules/monaco-editor/esm/vs/editor/editor.worker?worker";

import FlinkSQLWorker from "monaco-sql-languages/out/esm/flinksql/flinksql.worker?worker";
import SparkSQLWorker from "monaco-sql-languages/out/esm/sparksql/sparksql.worker?worker";
import HiveSQLWorker from "monaco-sql-languages/out/esm/hivesql/hivesql.worker?worker";
import PGSQLWorker from "monaco-sql-languages/out/esm/pgsql/pgsql.worker?worker";
import MySQLWorker from "monaco-sql-languages/out/esm/mysql/mysql.worker?worker";
import TrinoSQLWorker from "monaco-sql-languages/out/esm/trinosql/trinosql.worker?worker";
import ImpalaSQLWorker from "monaco-sql-languages/out/esm/impalasql/impalasql.worker?worker";

// eslint-disable-next-line no-restricted-globals
self.MonacoEnvironment = {
    getWorker(_, label) {
        if (label === "flinksql") {
            return new FlinkSQLWorker();
        }
        if (label === "hivesql") {
            return new HiveSQLWorker();
        }
        if (label === "sparksql") {
            return new SparkSQLWorker();
        }
        if (label === "pgsql") {
            return new PGSQLWorker();
        }
        if (label === "mysql") {
            return new MySQLWorker();
        }
        if (label === "trinosql") {
            return new TrinoSQLWorker();
        }
        if (label === "impalasql") {
            return new ImpalaSQLWorker();
        }
        return new EditorWorker();
    },
};

module.exports = {
   
};
