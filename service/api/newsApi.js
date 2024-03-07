const models = require('../db/db');
const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const url = require('url');
const conn = mysql.createConnection(models.mysql);
conn.connect();


// 搜索数据
router.post('/searchData', async (req, res) => {
	let obj = url.parse(req.url, true).query
	console.log(obj)
	let input = obj.input
	let sql = 'SELECT newsid,title,source,summary,content FROM news WHERE ( title LIKE \'%' + input + '%\' OR source LIKE \'%' + input + '%\' or summary LIKE \'%' + input + '%\' or content LIKE \'%' + input + '%\' )'
	let sqlArr = []
	console.log(sqlArr)
	conn.query(sql, sqlArr, function (_err, data) {
		if (_err) {
			res.json({
				status: '404',
				msg: 'error',
				data: _err
			})
		} else {
			res.json({
				status: '200',
				msg: 'success',
				data: data
			})
		}
	})
})


//获取新闻
router.get('/getschoolnewslist', async (req, res) => {
	let sql = 'select * from schoolnewslist order by date desc '
	conn.query(sql, function (_err, data) {
		if (_err) {
			res.json({
				status: '404',
				msg: 'error',
				data: _err
			})
		} else {
			res.json({
				status: '200',
				msg: 'success',
				data: data
			})
		}
	})
})

//获取新闻
router.get('/getedunoticelist', async (req, res) => {
	let sql = 'select * from edunoticelist order by date desc '
	conn.query(sql, function (_err, data) {
		if (_err) {
			res.json({
				status: '404',
				msg: 'error',
				data: _err
			})
		} else {
			res.json({
				status: '200',
				msg: 'success',
				data: data
			})
		}
	})
})

//获取新闻
router.get('/getstunoticelist', async (req, res) => {
	let obj = url.parse(req.url, true).query
	let startData = obj.startData*1
	let countData = obj.countData*1
	let sql = 'select * from stunoticelist order by date desc '
	let sqlArr = [startData, countData]
	conn.query(sql,sqlArr,function (_err, data) {
		if (_err) {
			res.json({
				status: '404',
				msg: 'error',
				data: _err
			})
		} else {
			res.json({
				status: '200',
				msg: 'success',
				data: data
			})
		}
	})
})

router.get('/getedunewsListCount', (req, res) => {
	let sql = 'select count(*) as count from edunews'
	let sqlArr = []
	conn.query(sql, sqlArr, function (error, data) {
		if (error) {
			res.json({
				status: '404',
				msg: 'fail',
				data: error
			})
		} else {
			const results = data
			res.json({
				status: '200',
				msg: 'success',
				data: results
			})
		}
	})
})

router.get('/getedunewslist', async (req, res) => {
	let obj = url.parse(req.url, true).query
	let startData = obj.startData*1
	let countData = obj.countData*1
	
	let sql = 'select * from edunews order by date desc limit ?,?'
	let sqlArr = [startData, countData]
	conn.query(sql,sqlArr, function (_err, data) {
		if (_err) {
			res.json({
				status: '404',
				msg: 'error',
				data: _err
			})
		} else {
			res.json({
				status: '200',
				msg: 'success',
				data: data
			})
		}
	})
})

router.get('/getrulesCount', (req, res) => {
	let sql = 'select count(*) as count from rules'
	let sqlArr = []
	conn.query(sql, sqlArr, function (error, data) {
		if (error) {
			res.json({
				status: '404',
				msg: 'fail',
				data: error
			})
		} else {
			const results = data
			res.json({
				status: '200',
				msg: 'success',
				data: results
			})
		}
	})
})

router.get('/getruleslist', async (req, res) => {
	let obj = url.parse(req.url, true).query
	let startData = obj.startData*1
	let countData = obj.countData*1
	
	let sql = 'select * from rules order by date desc limit ?,?'
	let sqlArr = [startData, countData]
	conn.query(sql,sqlArr, function (_err, data) {
		if (_err) {
			res.json({
				status: '404',
				msg: 'error',
				data: _err
			})
		} else {
			res.json({
				status: '200',
				msg: 'success',
				data: data
			})
		}
	})
})

router.get('/gettrainproCount', (req, res) => {
	let sql = 'select count(*) as count from trainpro'
	let sqlArr = []
	conn.query(sql, sqlArr, function (error, data) {
		if (error) {
			res.json({
				status: '404',
				msg: 'fail',
				data: error
			})
		} else {
			const results = data
			res.json({
				status: '200',
				msg: 'success',
				data: results
			})
		}
	})
})

router.get('/gettrainprolist', async (req, res) => {
	let obj = url.parse(req.url, true).query
	let startData = obj.startData*1
	let countData = obj.countData*1
	
	let sql = 'select * from trainpro order by date desc limit ?,?'
	let sqlArr = [startData, countData]
	conn.query(sql,sqlArr, function (_err, data) {
		if (_err) {
			res.json({
				status: '404',
				msg: 'error',
				data: _err
			})
		} else {
			res.json({
				status: '200',
				msg: 'success',
				data: data
			})
		}
	})
})

router.get('/getdtnoticeCount', (req, res) => {
	let sql = 'select count(*) as count from dtnotice'
	let sqlArr = []
	conn.query(sql, sqlArr, function (error, data) {
		if (error) {
			res.json({
				status: '404',
				msg: 'fail',
				data: error
			})
		} else {
			const results = data
			res.json({
				status: '200',
				msg: 'success',
				data: results
			})
		}
	})
})

router.get('/getdtnoticelist', async (req, res) => {
	let obj = url.parse(req.url, true).query
	let startData = obj.startData*1
	let countData = obj.countData*1
	
	let sql = 'select * from dtnotice order by date desc limit ?,?'
	let sqlArr = [startData, countData]
	conn.query(sql,sqlArr, function (_err, data) {
		if (_err) {
			res.json({
				status: '404',
				msg: 'error',
				data: _err
			})
		} else {
			res.json({
				status: '200',
				msg: 'success',
				data: data
			})
		}
	})
})

router.get('/getdtorganCount', (req, res) => {
	let sql = 'select count(*) as count from dtorgan'
	let sqlArr = []
	conn.query(sql, sqlArr, function (error, data) {
		if (error) {
			res.json({
				status: '404',
				msg: 'fail',
				data: error
			})
		} else {
			const results = data
			res.json({
				status: '200',
				msg: 'success',
				data: results
			})
		}
	})
})

router.get('/getdtorganlist', async (req, res) => {
	let obj = url.parse(req.url, true).query
	let startData = obj.startData*1
	let countData = obj.countData*1
	
	let sql = 'select * from dtorgan order by date desc limit ?,?'
	let sqlArr = [startData, countData]
	conn.query(sql,sqlArr, function (_err, data) {
		if (_err) {
			res.json({
				status: '404',
				msg: 'error',
				data: _err
			})
		} else {
			res.json({
				status: '200',
				msg: 'success',
				data: data
			})
		}
	})
})
router.get('/getdtnewsCount', (req, res) => {
	let sql = 'select count(*) as count from dtnews'
	let sqlArr = []
	conn.query(sql, sqlArr, function (error, data) {
		if (error) {
			res.json({
				status: '404',
				msg: 'fail',
				data: error
			})
		} else {
			const results = data
			res.json({
				status: '200',
				msg: 'success',
				data: results
			})
		}
	})
})

router.get('/getdtnewslist', async (req, res) => {
	let obj = url.parse(req.url, true).query
	let startData = obj.startData*1
	let countData = obj.countData*1
	
	let sql = 'select * from dtnews order by date desc limit ?,?'
	let sqlArr = [startData, countData]
	conn.query(sql,sqlArr, function (_err, data) {
		if (_err) {
			res.json({
				status: '404',
				msg: 'error',
				data: _err
			})
		} else {
			res.json({
				status: '200',
				msg: 'success',
				data: data
			})
		}
	})
})

router.get('/getactivityCount', (req, res) => {
	let sql = 'select count(*) as count from activity'
	let sqlArr = []
	conn.query(sql, sqlArr, function (error, data) {
		if (error) {
			res.json({
				status: '404',
				msg: 'fail',
				data: error
			})
		} else {
			const results = data
			res.json({
				status: '200',
				msg: 'success',
				data: results
			})
		}
	})
})

router.get('/getactivitylist', async (req, res) => {
	let obj = url.parse(req.url, true).query
	let startData = obj.startData*1
	let countData = obj.countData*1
	
	let sql = 'select * from activity order by date desc limit ?,?'
	let sqlArr = [startData, countData]
	conn.query(sql,sqlArr, function (_err, data) {
		if (_err) {
			res.json({
				status: '404',
				msg: 'error',
				data: _err
			})
		} else {
			res.json({
				status: '200',
				msg: 'success',
				data: data
			})
		}
	})
})

router.get('/getalumniCount', (req, res) => {
	let sql = 'select count(*) as count from alumni'
	let sqlArr = []
	conn.query(sql, sqlArr, function (error, data) {
		if (error) {
			res.json({
				status: '404',
				msg: 'fail',
				data: error
			})
		} else {
			const results = data
			res.json({
				status: '200',
				msg: 'success',
				data: results
			})
		}
	})
})

router.get('/getalumnilist', async (req, res) => {
	let obj = url.parse(req.url, true).query
	let startData = obj.startData*1
	let countData = obj.countData*1
	
	let sql = 'select * from alumni order by date desc limit ?,?'
	let sqlArr = [startData, countData]
	conn.query(sql,sqlArr, function (_err, data) {
		if (_err) {
			res.json({
				status: '404',
				msg: 'error',
				data: _err
			})
		} else {
			res.json({
				status: '200',
				msg: 'success',
				data: data
			})
		}
	})
})

router.get('/getstuworkCount', (req, res) => {
	let sql = 'select count(*) as count from stuwork'
	let sqlArr = []
	conn.query(sql, sqlArr, function (error, data) {
		if (error) {
			res.json({
				status: '404',
				msg: 'fail',
				data: error
			})
		} else {
			const results = data
			res.json({
				status: '200',
				msg: 'success',
				data: results
			})
		}
	})
})

router.get('/getstuworklist', async (req, res) => {
	let obj = url.parse(req.url, true).query
	let startData = obj.startData*1
	let countData = obj.countData*1
	
	let sql = 'select * from stuwork order by date desc limit ?,?'
	let sqlArr = [startData, countData]
	conn.query(sql,sqlArr, function (_err, data) {
		if (_err) {
			res.json({
				status: '404',
				msg: 'error',
				data: _err
			})
		} else {
			res.json({
				status: '200',
				msg: 'success',
				data: data
			})
		}
	})
})

router.get('/getenrollmentCount', (req, res) => {
	let sql = 'select count(*) as count from enrollment'
	let sqlArr = []
	conn.query(sql, sqlArr, function (error, data) {
		if (error) {
			res.json({
				status: '404',
				msg: 'fail',
				data: error
			})
		} else {
			const results = data
			res.json({
				status: '200',
				msg: 'success',
				data: results
			})
		}
	})
})

router.get('/getenrollmentlist', async (req, res) => {
	let obj = url.parse(req.url, true).query
	let startData = obj.startData*1
	let countData = obj.countData*1
	
	let sql = 'select * from enrollment order by date desc limit ?,?'
	let sqlArr = [startData, countData]
	conn.query(sql,sqlArr, function (_err, data) {
		if (_err) {
			res.json({
				status: '404',
				msg: 'error',
				data: _err
			})
		} else {
			res.json({
				status: '200',
				msg: 'success',
				data: data
			})
		}
	})
})

router.get('/getemploymentCount', (req, res) => {
	let sql = 'select count(*) as count from employment'
	let sqlArr = []
	conn.query(sql, sqlArr, function (error, data) {
		if (error) {
			res.json({
				status: '404',
				msg: 'fail',
				data: error
			})
		} else {
			const results = data
			res.json({
				status: '200',
				msg: 'success',
				data: results
			})
		}
	})
})

router.get('/getemploymentlist', async (req, res) => {
	let obj = url.parse(req.url, true).query
	let startData = obj.startData*1
	let countData = obj.countData*1
	
	let sql = 'select * from employment order by date desc limit ?,?'
	let sqlArr = [startData, countData]
	conn.query(sql,sqlArr, function (_err, data) {
		if (_err) {
			res.json({
				status: '404',
				msg: 'error',
				data: _err
			})
		} else {
			res.json({
				status: '200',
				msg: 'success',
				data: data
			})
		}
	})
})

router.get('/getempnoticeCount', (req, res) => {
	let sql = 'select count(*) as count from empnotice'
	let sqlArr = []
	conn.query(sql, sqlArr, function (error, data) {
		if (error) {
			res.json({
				status: '404',
				msg: 'fail',
				data: error
			})
		} else {
			const results = data
			res.json({
				status: '200',
				msg: 'success',
				data: results
			})
		}
	})
})

router.get('/getempnoticelist', async (req, res) => {
	let obj = url.parse(req.url, true).query
	let startData = obj.startData*1
	let countData = obj.countData*1
	
	let sql = 'select * from empnotice order by date desc limit ?,?'
	let sqlArr = [startData, countData]
	conn.query(sql,sqlArr, function (_err, data) {
		if (_err) {
			res.json({
				status: '404',
				msg: 'error',
				data: _err
			})
		} else {
			res.json({
				status: '200',
				msg: 'success',
				data: data
			})
		}
	})
})

router.get('/gettdownloadCount', (req, res) => {
	let sql = 'select count(*) as count from tdownload'
	let sqlArr = []
	conn.query(sql, sqlArr, function (error, data) {
		if (error) {
			res.json({
				status: '404',
				msg: 'fail',
				data: error
			})
		} else {
			const results = data
			res.json({
				status: '200',
				msg: 'success',
				data: results
			})
		}
	})
})

router.get('/gettdownloadlist', async (req, res) => {
	let obj = url.parse(req.url, true).query
	let startData = obj.startData*1
	let countData = obj.countData*1
	
	let sql = 'select * from tdownload order by date desc limit ?,?'
	let sqlArr = [startData, countData]
	conn.query(sql,sqlArr, function (_err, data) {
		if (_err) {
			res.json({
				status: '404',
				msg: 'error',
				data: _err
			})
		} else {
			res.json({
				status: '200',
				msg: 'success',
				data: data
			})
		}
	})
})

router.get('/getsdownloadCount', (req, res) => {
	let sql = 'select count(*) as count from sdownload'
	let sqlArr = []
	conn.query(sql, sqlArr, function (error, data) {
		if (error) {
			res.json({
				status: '404',
				msg: 'fail',
				data: error
			})
		} else {
			const results = data
			res.json({
				status: '200',
				msg: 'success',
				data: results
			})
		}
	})
})

router.get('/getsdownloadlist', async (req, res) => {
	let obj = url.parse(req.url, true).query
	let startData = obj.startData*1
	let countData = obj.countData*1
	
	let sql = 'select * from sdownload order by date desc limit ?,?'
	let sqlArr = [startData, countData]
	conn.query(sql,sqlArr, function (_err, data) {
		if (_err) {
			res.json({
				status: '404',
				msg: 'error',
				data: _err
			})
		} else {
			res.json({
				status: '200',
				msg: 'success',
				data: data
			})
		}
	})
})

router.get('/getschoolnewsCount', (req, res) => {
	let sql = 'select count(*) as count from schoolnewslist'
	let sqlArr = []
	conn.query(sql, sqlArr, function (error, data) {
		if (error) {
			res.json({
				status: '404',
				msg: 'fail',
				data: error
			})
		} else {
			const results = data
			res.json({
				status: '200',
				msg: 'success',
				data: results
			})
		}
	})
})

router.get('/getschoolnewslistMore', async (req, res) => {
	let obj = url.parse(req.url, true).query
	let startData = obj.startData*1
	let countData = obj.countData*1
	
	let sql = 'select * from schoolnewslist order by date desc limit ?,?'
	let sqlArr = [startData, countData]
	conn.query(sql,sqlArr, function (_err, data) {
		if (_err) {
			res.json({
				status: '404',
				msg: 'error',
				data: _err
			})
		} else {
			res.json({
				status: '200',
				msg: 'success',
				data: data
			})
		}
	})
})

router.get('/getstunoticeCount', (req, res) => {
	let sql = 'select count(*) as count from stunoticelist'
	let sqlArr = []
	conn.query(sql, sqlArr, function (error, data) {
		if (error) {
			res.json({
				status: '404',
				msg: 'fail',
				data: error
			})
		} else {
			const results = data
			res.json({
				status: '200',
				msg: 'success',
				data: results
			})
		}
	})
})

router.get('/getstunoticeMore', async (req, res) => {
	let obj = url.parse(req.url, true).query
	let startData = obj.startData*1
	let countData = obj.countData*1
	
	let sql = 'select * from stunoticelist order by date desc limit ?,?'
	let sqlArr = [startData, countData]
	conn.query(sql,sqlArr, function (_err, data) {
		if (_err) {
			res.json({
				status: '404',
				msg: 'error',
				data: _err
			})
		} else {
			res.json({
				status: '200',
				msg: 'success',
				data: data
			})
		}
	})
})

router.get('/getedunoticeCount', (req, res) => {
	let sql = 'select count(*) as count from edunoticelist'
	let sqlArr = []
	conn.query(sql, sqlArr, function (error, data) {
		if (error) {
			res.json({
				status: '404',
				msg: 'fail',
				data: error
			})
		} else {
			const results = data
			res.json({
				status: '200',
				msg: 'success',
				data: results
			})
		}
	})
})

router.get('/getedunoticeMore', async (req, res) => {
	let obj = url.parse(req.url, true).query
	let startData = obj.startData*1
	let countData = obj.countData*1
	
	let sql = 'select * from edunoticelist order by date desc limit ?,?'
	let sqlArr = [startData, countData]
	conn.query(sql,sqlArr, function (_err, data) {
		if (_err) {
			res.json({
				status: '404',
				msg: 'error',
				data: _err
			})
		} else {
			res.json({
				status: '200',
				msg: 'success',
				data: data
			})
		}
	})
})

//文章详情、访问
router.get('/notedetail/:newsid', (req, res) => {
    let newsid = req.params.newsid
	console.log(newsid)
    let sql = 'select * from news where newsid=?'
    conn.query(sql, newsid, function (_err, result) {
        if (result.length == 0) {
            res.json({ flag: true, msg: "该文章已被删除或不存在" })
        } else {
            conn.query(sql, newsid, function (_err, result) {
                if (result) {
                    console.log(result)
                }
            })
            res.json(result)
        }
    })
})
router.get('/getteacherCount', (req, res) => {
	let sql = 'select count(*) as count from teacher'
	let sqlArr = []
	conn.query(sql, sqlArr, function (error, data) {
		if (error) {
			res.json({
				status: '404',
				msg: 'fail',
				data: error
			})
		} else {
			const results = data
			res.json({
				status: '200',
				msg: 'success',
				data: results
			})
		}
	})
})

router.get('/getteacher', async (req, res) => {
	let obj = url.parse(req.url, true).query
	let startData = obj.startData*1
	let countData = obj.countData*1
	
	let sql = 'select * from teacher order by id ASC limit ?,?'
	let sqlArr = [startData, countData]
	conn.query(sql,sqlArr, function (_err, data) {
		if (_err) {
			res.json({
				status: '404',
				msg: 'error',
				data: _err
			})
		} else {
			res.json({
				status: '200',
				msg: 'success',
				data: data
			})
		}
	})
})

router.get('/getserviceCount', (req, res) => {
	let sql = 'select count(*) as count from service'
	let sqlArr = []
	conn.query(sql, sqlArr, function (error, data) {
		if (error) {
			res.json({
				status: '404',
				msg: 'fail',
				data: error
			})
		} else {
			const results = data
			res.json({
				status: '200',
				msg: 'success',
				data: results
			})
		}
	})
})

router.get('/getservice', async (req, res) => {
	let obj = url.parse(req.url, true).query
	let startData = obj.startData*1
	let countData = obj.countData*1
	
	let sql = 'select * from service order by id ASC limit ?,?'
	let sqlArr = [startData, countData]
	conn.query(sql,sqlArr, function (_err, data) {
		if (_err) {
			res.json({
				status: '404',
				msg: 'error',
				data: _err
			})
		} else {
			res.json({
				status: '200',
				msg: 'success',
				data: data
			})
		}
	})
})

router.get('/getbasicsubjectCount', (req, res) => {
	let sql = 'select count(*) as count from basicsubject'
	let sqlArr = []
	conn.query(sql, sqlArr, function (error, data) {
		if (error) {
			res.json({
				status: '404',
				msg: 'fail',
				data: error
			})
		} else {
			const results = data
			res.json({
				status: '200',
				msg: 'success',
				data: results
			})
		}
	})
})

router.get('/getbasicsubject', async (req, res) => {
	let obj = url.parse(req.url, true).query
	let startData = obj.startData*1
	let countData = obj.countData*1
	
	let sql = 'select * from basicsubject order by id ASC limit ?,?'
	let sqlArr = [startData, countData]
	conn.query(sql,sqlArr, function (_err, data) {
		if (_err) {
			res.json({
				status: '404',
				msg: 'error',
				data: _err
			})
		} else {
			res.json({
				status: '200',
				msg: 'success',
				data: data
			})
		}
	})
})

router.get('/getchairprofessorCount', (req, res) => {
	let sql = 'select count(*) as count from chairprofessor'
	let sqlArr = []
	conn.query(sql, sqlArr, function (error, data) {
		if (error) {
			res.json({
				status: '404',
				msg: 'fail',
				data: error
			})
		} else {
			const results = data
			res.json({
				status: '200',
				msg: 'success',
				data: results
			})
		}
	})
})

router.get('/getchairprofessor', async (req, res) => {
	let obj = url.parse(req.url, true).query
	let startData = obj.startData*1
	let countData = obj.countData*1
	
	let sql = 'select * from chairprofessor order by id ASC limit ?,?'
	let sqlArr = [startData, countData]
	conn.query(sql,sqlArr, function (_err, data) {
		if (_err) {
			res.json({
				status: '404',
				msg: 'error',
				data: _err
			})
		} else {
			res.json({
				status: '200',
				msg: 'success',
				data: data
			})
		}
	})
})

router.get('/getprofessorCount', (req, res) => {
	let sql = 'select count(*) as count from professor'
	let sqlArr = []
	conn.query(sql, sqlArr, function (error, data) {
		if (error) {
			res.json({
				status: '404',
				msg: 'fail',
				data: error
			})
		} else {
			const results = data
			res.json({
				status: '200',
				msg: 'success',
				data: results
			})
		}
	})
})

router.get('/getprofessor', async (req, res) => {
	let obj = url.parse(req.url, true).query
	let startData = obj.startData*1
	let countData = obj.countData*1
	
	let sql = 'select * from professor order by id ASC limit ?,?'
	let sqlArr = [startData, countData]
	conn.query(sql,sqlArr, function (_err, data) {
		if (_err) {
			res.json({
				status: '404',
				msg: 'error',
				data: _err
			})
		} else {
			res.json({
				status: '200',
				msg: 'success',
				data: data
			})
		}
	})
})

router.get('/getaiCount', (req, res) => {
	let sql = 'select count(*) as count from ai'
	let sqlArr = []
	conn.query(sql, sqlArr, function (error, data) {
		if (error) {
			res.json({
				status: '404',
				msg: 'fail',
				data: error
			})
		} else {
			const results = data
			res.json({
				status: '200',
				msg: 'success',
				data: results
			})
		}
	})
})

router.get('/getai', async (req, res) => {
	let obj = url.parse(req.url, true).query
	let startData = obj.startData*1
	let countData = obj.countData*1
	
	let sql = 'select * from ai order by id ASC limit ?,?'
	let sqlArr = [startData, countData]
	conn.query(sql,sqlArr, function (_err, data) {
		if (_err) {
			res.json({
				status: '404',
				msg: 'error',
				data: _err
			})
		} else {
			res.json({
				status: '200',
				msg: 'success',
				data: data
			})
		}
	})
})

router.get('/getautomationCount', (req, res) => {
	let sql = 'select count(*) as count from automation'
	let sqlArr = []
	conn.query(sql, sqlArr, function (error, data) {
		if (error) {
			res.json({
				status: '404',
				msg: 'fail',
				data: error
			})
		} else {
			const results = data
			res.json({
				status: '200',
				msg: 'success',
				data: results
			})
		}
	})
})

router.get('/getautomation', async (req, res) => {
	let obj = url.parse(req.url, true).query
	let startData = obj.startData*1
	let countData = obj.countData*1
	
	let sql = 'select * from automation order by id ASC limit ?,?'
	let sqlArr = [startData, countData]
	conn.query(sql,sqlArr, function (_err, data) {
		if (_err) {
			res.json({
				status: '404',
				msg: 'error',
				data: _err
			})
		} else {
			res.json({
				status: '200',
				msg: 'success',
				data: data
			})
		}
	})
})

router.get('/getcommunicationCount', (req, res) => {
	let sql = 'select count(*) as count from communication'
	let sqlArr = []
	conn.query(sql, sqlArr, function (error, data) {
		if (error) {
			res.json({
				status: '404',
				msg: 'fail',
				data: error
			})
		} else {
			const results = data
			res.json({
				status: '200',
				msg: 'success',
				data: results
			})
		}
	})
})

router.get('/getcommunication', async (req, res) => {
	let obj = url.parse(req.url, true).query
	let startData = obj.startData*1
	let countData = obj.countData*1
	
	let sql = 'select * from communication order by id ASC limit ?,?'
	let sqlArr = [startData, countData]
	conn.query(sql,sqlArr, function (_err, data) {
		if (_err) {
			res.json({
				status: '404',
				msg: 'error',
				data: _err
			})
		} else {
			res.json({
				status: '200',
				msg: 'success',
				data: data
			})
		}
	})
})

router.get('/getcomputerCount', (req, res) => {
	let sql = 'select count(*) as count from computer'
	let sqlArr = []
	conn.query(sql, sqlArr, function (error, data) {
		if (error) {
			res.json({
				status: '404',
				msg: 'fail',
				data: error
			})
		} else {
			const results = data
			res.json({
				status: '200',
				msg: 'success',
				data: results
			})
		}
	})
})

router.get('/getcomputer', async (req, res) => {
	let obj = url.parse(req.url, true).query
	let startData = obj.startData*1
	let countData = obj.countData*1
	
	let sql = 'select * from computer order by id ASC limit ?,?'
	let sqlArr = [startData, countData]
	conn.query(sql,sqlArr, function (_err, data) {
		if (_err) {
			res.json({
				status: '404',
				msg: 'error',
				data: _err
			})
		} else {
			res.json({
				status: '200',
				msg: 'success',
				data: data
			})
		}
	})
})

router.get('/getvisitprofessorCount', (req, res) => {
	let sql = 'select count(*) as count from visitprofessor'
	let sqlArr = []
	conn.query(sql, sqlArr, function (error, data) {
		if (error) {
			res.json({
				status: '404',
				msg: 'fail',
				data: error
			})
		} else {
			const results = data
			res.json({
				status: '200',
				msg: 'success',
				data: results
			})
		}
	})
})

router.get('/getvisitprofessor', async (req, res) => {
	let obj = url.parse(req.url, true).query
	let startData = obj.startData*1
	let countData = obj.countData*1
	
	let sql = 'select * from visitprofessor order by id ASC limit ?,?'
	let sqlArr = [startData, countData]
	conn.query(sql,sqlArr, function (_err, data) {
		if (_err) {
			res.json({
				status: '404',
				msg: 'error',
				data: _err
			})
		} else {
			res.json({
				status: '200',
				msg: 'success',
				data: data
			})
		}
	})
})

router.get('/Tdetail/:id', (req, res) => {
    let id = req.params.id
	console.log(id)
    let sql = 'select * from teacher where id=?'
    conn.query(sql, id, function (_err, result) {
        if (result.length == 0) {
            res.json({ flag: true, msg: "该文章已被删除或不存在" })
        } else {
            conn.query(sql, id, function (_err, result) {
                if (result) {
                    console.log(result)
                }
            })
            res.json(result)
        }
    })
})

router.get('/Pdetail/:id', (req, res) => {
    let id = req.params.id
	console.log(id)
    let sql = 'select * from professor where id=?'
    conn.query(sql, id, function (_err, result) {
        if (result.length == 0) {
            res.json({ flag: true, msg: "该文章已被删除或不存在" })
        } else {
            conn.query(sql, id, function (_err, result) {
                if (result) {
                    console.log(result)
                }
            })
            res.json(result)
        }
    })
})

router.get('/Sdetail/:id', (req, res) => {
    let id = req.params.id
	console.log(id)
    let sql = 'select * from service where id=?'
    conn.query(sql, id, function (_err, result) {
        if (result.length == 0) {
            res.json({ flag: true, msg: "该文章已被删除或不存在" })
        } else {
            conn.query(sql, id, function (_err, result) {
                if (result) {
                    console.log(result)
                }
            })
            res.json(result)
        }
    })
})
module.exports = router;