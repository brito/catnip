// include Catalog 18w40
// https://gist.github.com/brito/c52557ac000934ea85898e764d56934c#file-catalog-js

let responses = {
  source: {
    list: [{
      "system_id": 2,
      "job_id": 45,
      "source_name": "SamSung-ALL",
      "source_type": "s3",
      "link": "s3a://ivai/twitter_data/samsung/*/*05.json",
      "created_at": "2020-03-03 16:59:48.086064",
      "calculated_at": "2020-03-04 02:10:15.427132",
      "size": -1,
      "anomaly": true
    }, {
      "system_id": 3,
      "job_id": 48,
      "source_name": "SamSung-major",
      "source_type": "s3",
      "link": "s3a://ivai/twitter_data/samsung/samsungnote2016-1/*.json",
      "created_at": "2020-03-05 01:42:03.277035",
      "calculated_at": "2020-03-05 03:06:43.055966",
      "size": 125731,
      "anomaly": true
    }, {
      "system_id": 4,
      "job_id": 49,
      "source_name": "SamSung-major2",
      "source_type": "s3",
      "link": "s3a://ivai/twitter_data/samsung/*/*.json",
      "created_at": "2020-03-05 02:37:56.230406",
      "calculated_at": "2020-03-05 03:21:34.769543",
      "size": -1,
      "anomaly": true
    }, {
      "system_id": 5,
      "job_id": 50,
      "source_name": "try samsung2",
      "source_type": "ilgm",
      "link": "( select \"Content\" as text from samsung.kh02 limit 500) as a ",
      "created_at": "2020-03-09 23:38:06.322896",
      "calculated_at": "2020-03-10 01:30:09.184189",
      "size": 500,
      "anomaly": false
    }, {
      "system_id": 6,
      "job_id": 54,
      "source_name": "samsung.messenger2020_incoming",
      "source_type": "ilgm",
      "link": "(select \"Content\" as text from samsung.messenger2020_incoming) as a ",
      "created_at": "2020-03-19 02:23:07.535467",
      "calculated_at": "2020-03-20 07:27:37.511131",
      "size": 65817,
      "anomaly": false
    }],
    get: {}
  },

  anomaly: {
    list: [{
      "system_id": 1,
      "anomaly_name": "s3a://ivai/twitter_data/samsung/*/*.json",
      "source": "SamSung-ALL",
      "resolution": "day",
      "status": null,
      "created_at": "2020-03-03",
      "finished_at": "2020-03-03",
      "job_id": 46
    }]
  },

  anomaly_report: {
    list: [{
      "system_id": 1,
      "anomaly_name": "s3a://ivai/twitter_data/samsung/*/*.json",
      "report_name": "report1",
      "status": "waiting",
      "created_at": "2020-03-03",
      "factor": 0.1,
      "finished_at": "2020-03-16 03:03:08.195409",
      "job_id": 47
    }]
  },

  bulk_request: {
    list: [{
      "system_id": 2,
      "job_id": 45,
      "source_name": "SamSung-ALL",
      "source_type": "s3",
      "link": "s3a://ivai/twitter_data/samsung/*/*05.json",
      "created_at": "2020-03-03 16:59:48.086064",
      "calculated_at": "2020-03-04 02:10:15.427132",
      "size": -1,
      "anomaly": true
    }, {
      "system_id": 3,
      "job_id": 48,
      "source_name": "SamSung-major",
      "source_type": "s3",
      "link": "s3a://ivai/twitter_data/samsung/samsungnote2016-1/*.json",
      "created_at": "2020-03-05 01:42:03.277035",
      "calculated_at": "2020-03-05 03:06:43.055966",
      "size": 125731,
      "anomaly": true
    }, {
      "system_id": 4,
      "job_id": 49,
      "source_name": "SamSung-major2",
      "source_type": "s3",
      "link": "s3a://ivai/twitter_data/samsung/*/*.json",
      "created_at": "2020-03-05 02:37:56.230406",
      "calculated_at": "2020-03-05 03:21:34.769543",
      "size": -1,
      "anomaly": true
    }, {
      "system_id": 5,
      "job_id": 50,
      "source_name": "try samsung2",
      "source_type": "ilgm",
      "link": "( select \"Content\" as text from samsung.kh02 limit 500) as a ",
      "created_at": "2020-03-09 23:38:06.322896",
      "calculated_at": "2020-03-10 01:30:09.184189",
      "size": 500,
      "anomaly": false
    }, {
      "system_id": 6,
      "job_id": 54,
      "source_name": "samsung.messenger2020_incoming",
      "source_type": "ilgm",
      "link": "(select \"Content\" as text from samsung.messenger2020_incoming) as a ",
      "created_at": "2020-03-19 02:23:07.535467",
      "calculated_at": "2020-03-20 07:27:37.511131",
      "size": 65817,
      "anomaly": false
    }]
  },

  job: {
    list: [{
      "system_id": 59,
      "status": "waiting",
      "created_at": "2020-03-25",
      "updated_at": "2020-03-25",
      "job_type": "resMagnetSeed",
      "origin_id": 1
    }, {
      "system_id": 58,
      "status": "waiting",
      "created_at": "2020-03-25",
      "updated_at": "2020-03-25",
      "job_type": "resMagnetSeed",
      "origin_id": 0
    }, {
      "system_id": 57,
      "status": "waiting",
      "created_at": "2020-03-25",
      "updated_at": "2020-03-25",
      "job_type": "resMagnetSeed",
      "origin_id": 0
    }, {
      "system_id": 56,
      "status": "finished",
      "created_at": "2020-03-20",
      "updated_at": "2020-03-22",
      "job_type": "bulkRequest",
      "origin_id": 4
    }, {
      "system_id": 55,
      "status": "meh",
      "created_at": "2020-03-19",
      "updated_at": "2020-03-19",
      "job_type": "bulkRequest",
      "origin_id": 3
    }, {
      "system_id": 54,
      "status": "finished",
      "created_at": "2020-03-19",
      "updated_at": "2020-03-20",
      "job_type": "source",
      "origin_id": 6
    }, {
      "system_id": 53,
      "status": "finished",
      "created_at": "2020-03-10",
      "updated_at": "2020-03-10",
      "job_type": "bulkRequest",
      "origin_id": 2
    }, {
      "system_id": 52,
      "status": "finished",
      "created_at": "2020-03-10",
      "updated_at": "2020-03-10",
      "job_type": "bulkRequest",
      "origin_id": 1
    }, {
      "system_id": 51,
      "status": "finished",
      "created_at": "2020-03-10",
      "updated_at": "2020-03-10",
      "job_type": "bulkRequest",
      "origin_id": 1
    }, {
      "system_id": 50,
      "status": "finished",
      "created_at": "2020-03-09",
      "updated_at": "2020-03-10",
      "job_type": "source",
      "origin_id": 5
    }, {
      "system_id": 49,
      "status": "finished",
      "created_at": "2020-03-05",
      "updated_at": "2020-03-05",
      "job_type": "source",
      "origin_id": 4
    }, {
      "system_id": 48,
      "status": "finished",
      "created_at": "2020-03-05",
      "updated_at": "2020-03-05",
      "job_type": "source",
      "origin_id": 3
    }, {
      "system_id": 47,
      "status": "finished",
      "created_at": "2020-03-17",
      "updated_at": "2020-03-16",
      "job_type": "AnomalyReport",
      "origin_id": 1
    }, {
      "system_id": 46,
      "status": "finished",
      "created_at": "2020-03-03",
      "updated_at": "2020-03-04",
      "job_type": "Anomaly",
      "origin_id": 1
    }, {
      "system_id": 45,
      "status": "finished",
      "created_at": "2020-03-03",
      "updated_at": "2020-03-04",
      "job_type": "source",
      "origin_id": 2
    }]
  }
};
