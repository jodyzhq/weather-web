/*
 * @Author: zhanghongqiao@hiynn.com
 * @Date: 2018-03-30 10:13:23
 * @Description: 头部导航mock数据
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2018-05-11 10:37:54
 */

export default {
  url: '/menus/null',
  mock: {
    'code': 1,
    'msg': 'success',
    'result': {
      'menuList': [
        {
          'id': '2c92848f62ce22440162d2ecf46a0000',
          'parentId': null,
          'menuName': '首页',
          'menuUrl': '/weather-web/airMonitoring/landingPage',
          'orderNo': 1,
          'childList': null
        },
        {
          'id': '2c92848f62ce22440162d2ee37a90001',
          'parentId': null,
          'menuName': '监测地图',
          'menuUrl': '/weather-web/airMonitoring/realtimeHistoryIndex',
          'orderNo': 2,
          'childList': null
        },
        {
          'id': '402881245d979e56015d97a069fa0000',
          'parentId': null,
          'menuName': '全国视图',
          'menuUrl': '/weather-web/airMonitoring/country_index',
          'orderNo': 3,
          'childList': null
        },
        {
          'id': '2c92848f62ce22440162d32a256a0002',
          'parentId': null,
          'menuName': '污染溯源',
          'menuUrl': 'javascript:void(0)',
          'orderNo': 4,
          'childList': [
            {
              'id': '2c92848f61543d380161613630ad0001',
              'parentId': '2c92848f62ce22440162d32a256a0002',
              'menuName': '勘查管理',
              'menuUrl': '/weather-web/surveyjob',
              'orderNo': 2,
              'childList': null
            }
          ]
        },
        {
          'id': '4028f481585db7d701585dc6ae1f0016',
          'parentId': null,
          'menuName': '统计分析',
          'menuUrl': 'javascript:void(0)',
          'orderNo': 5,
          'childList': [
            {
              'id': '402881325eb81dc9015eb81ffd830000',
              'parentId': '4028f481585db7d701585dc6ae1f0016',
              'menuName': '监测数据分析',
              'menuUrl': '/weather-web/stationAnalysis/surveyData',
              'orderNo': 1,
              'childList': null
            },
            {
              'id': '2c9280dc5ad2347e015ad4ffde210008',
              'parentId': '4028f481585db7d701585dc6ae1f0016',
              'menuName': '城市日历',
              'menuUrl': '/weather-web/airCalendar/city_day_statics',
              'orderNo': 2,
              'childList': null
            },
            {
              'id': '2c9280dc5ad2347e015ad500c0110009',
              'parentId': '4028f481585db7d701585dc6ae1f0016',
              'menuName': '城市月历',
              'menuUrl': '/weather-web/airCalendar/city_month_statics',
              'orderNo': 3,
              'childList': null
            },
            {
              'id': '4028b8815f9520b6015f95a3d5000001',
              'parentId': '4028f481585db7d701585dc6ae1f0016',
              'menuName': '城市散点',
              'menuUrl': '/weather-web/airCalendar/city_scatter',
              'orderNo': 4,
              'childList': null
            },
            {
              'id': '402881255ce7a21b015ce82730ce0003',
              'parentId': '4028f481585db7d701585dc6ae1f0016',
              'menuName': '监测数据查询',
              'menuUrl': '/weather-web/statistics/dataOutput',
              'orderNo': 5,
              'childList': null
            },
            {
              'id': '402881325e6e9fe1015e6ee56e7f0000',
              'parentId': '4028f481585db7d701585dc6ae1f0016',
              'menuName': '城市数据分析',
              'menuUrl': '/weather-web/multistation/index',
              'orderNo': 6,
              'childList': null
            },
            {
              'id': '402882815d547e8a015d5480f7c80000',
              'parentId': '4028f481585db7d701585dc6ae1f0016',
              'menuName': '超标统计',
              'menuUrl': '/weather-web/analysis/overproof',
              'orderNo': 7,
              'childList': null
            }
          ]
        },
        {
          'id': '2c9280dc5a7a1513015a7db597ff0007',
          'parentId': null,
          'menuName': '考核排名',
          'menuUrl': 'javascript:void(0)',
          'orderNo': 6,
          'childList': [
            {
              'id': '402881245d972909015d972ceec20000',
              'parentId': '2c9280dc5a7a1513015a7db597ff0007',
              'menuName': '城市排名',
              'menuUrl': '/weather-web/cityData/cityRank',
              'orderNo': 1,
              'childList': null
            },
            {
              'id': '40284e81612b264901612b34e1b60000',
              'parentId': '2c9280dc5a7a1513015a7db597ff0007',
              'menuName': '区县目标管理',
              'menuUrl': '/weather-web/cityData/districtS_Manager',
              'orderNo': 2,
              'childList': null
            },
            {
              'id': '4028810f62184154016219052d5e0000',
              'parentId': '2c9280dc5a7a1513015a7db597ff0007',
              'menuName': '区县考核统计',
              'menuUrl': '/weather-web/cityData/districtS_analysis',
              'orderNo': 3,
              'childList': null
            }
          ]
        },
        {
          'id': '402882815d06672b015d07439fdd0000',
          'parentId': null,
          'menuName': '报告',
          'menuUrl': '/weather-web/statistics/sysReportUpload',
          'orderNo': 7,
          'childList': null
        },
        {
          'id': '2c92848f62ce22440162d3367f830003',
          'parentId': null,
          'menuName': '设置',
          'menuUrl': 'javascript:void(0)',
          'orderNo': 8,
          'childList': [
            {
              'id': '2c92848461543d3701616108b9af0000',
              'parentId': '2c92848f62ce22440162d3367f830003',
              'menuName': '数据质控',
              'menuUrl': 'javascript:void(0)',
              'orderNo': 1,
              'childList': [
                {
                  'id': '402882815e0ced03015e0cef148a0000',
                  'parentId': '2c92848461543d3701616108b9af0000',
                  'menuName': '数据审核',
                  'menuUrl': '/weather-web/statistics/dataAudit',
                  'orderNo': 1,
                  'childList': null
                },
                {
                  'id': '4028812c5de90f74015de912e7de0000',
                  'parentId': '2c92848461543d3701616108b9af0000',
                  'menuName': '数据告警',
                  'menuUrl': '/weather-web/warn/data/index',
                  'orderNo': 2,
                  'childList': null
                },
                {
                  'id': '402881e960c40d5e0160c47cecf40000',
                  'parentId': '2c92848461543d3701616108b9af0000',
                  'menuName': '异常数据监控',
                  'menuUrl': '/weather-web/warn/data/dataMonitor',
                  'orderNo': 3,
                  'childList': null
                }
              ]
            },
            {
              'id': '2c9280dc5a7a1513015a7da9e0ab0002',
              'parentId': '2c92848f62ce22440162d3367f830003',
              'menuName': '设备管理',
              'menuUrl': 'javascript:void(0)',
              'orderNo': 2,
              'childList': [
                {
                  'id': '402881246095b8f1016095ceab660000',
                  'parentId': '2c9280dc5a7a1513015a7da9e0ab0002',
                  'menuName': '监测点管理',
                  'menuUrl': '/weather-web/system/equipment/monitoring/index',
                  'orderNo': 1,
                  'childList': null
                },
                {
                  'id': '2c9280dc5ad9cf37015ada1ab9ff0001',
                  'parentId': '2c9280dc5a7a1513015a7da9e0ab0002',
                  'menuName': '设备整机管理',
                  'menuUrl': '/weather-web/station/index',
                  'orderNo': 2,
                  'childList': null
                },
                {
                  'id': '2c9280dc5ad9cf37015ada1c0c2e0002',
                  'parentId': '2c9280dc5a7a1513015a7da9e0ab0002',
                  'menuName': '传感器管理',
                  'menuUrl': '/weather-web/sensor/index',
                  'orderNo': 3,
                  'childList': null
                },
                {
                  'id': '2c9280dc5ad9cf37015ada1ebb8b0003',
                  'parentId': '2c9280dc5a7a1513015a7da9e0ab0002',
                  'menuName': '设备状态',
                  'menuUrl': '/weather-web/rest/station/equIndex',
                  'orderNo': 4,
                  'childList': null
                },
                {
                  'id': '2c9280dc5ad9cf37015ada1f94300004',
                  'parentId': '2c9280dc5a7a1513015a7da9e0ab0002',
                  'menuName': '设备故障',
                  'menuUrl': '/weather-web/rest/station/equFaultIndex',
                  'orderNo': 5,
                  'childList': null
                },
                {
                  'id': '2c9280dc5ad9cf37015ada21409e0006',
                  'parentId': '2c9280dc5a7a1513015a7da9e0ab0002',
                  'menuName': '原始数据',
                  'menuUrl': '/weather-web/data/environmental',
                  'orderNo': 6,
                  'childList': null
                },
                {
                  'id': '4028813b5cce359f015cceb3a8370000',
                  'parentId': '2c9280dc5a7a1513015a7da9e0ab0002',
                  'menuName': '设备驯化',
                  'menuUrl': '/weather-web/weather/deviceAdjustIndex',
                  'orderNo': 7,
                  'childList': null
                }
              ]
            },
            {
              'id': '2c92848461543d370161613a753b0002',
              'parentId': '2c92848f62ce22440162d3367f830003',
              'menuName': '自动化校准',
              'menuUrl': 'javascript:void(0)',
              'orderNo': 3,
              'childList': [
                {
                  'id': '2c9280dc5e3b4f35015e3c1b56200007',
                  'parentId': '2c92848461543d370161613a753b0002',
                  'menuName': '设备寻标',
                  'menuUrl': '/weather-web/benchmark/index',
                  'orderNo': 1,
                  'childList': null
                },
                {
                  'id': '8a53b7825e5a12c3015e5a2f96b1008f',
                  'parentId': '2c92848461543d370161613a753b0002',
                  'menuName': '参数计算',
                  'menuUrl': '/weather-web/system/sensor/autocalibration',
                  'orderNo': 2,
                  'childList': null
                }
              ]
            },
            {
              'id': '4028f481585d828301585d8f85f60000',
              'parentId': '2c92848f62ce22440162d3367f830003',
              'menuName': '系统管理',
              'menuUrl': 'javascript:void(0)',
              'orderNo': 4,
              'childList': [
                {
                  'id': '4028f481585db7d701585dbaa5b40001',
                  'parentId': '4028f481585d828301585d8f85f60000',
                  'menuName': '组织管理',
                  'menuUrl': '/weather-web/sys/organize',
                  'orderNo': 1,
                  'childList': null
                },
                {
                  'id': '2c9280dc5a7a1513015a7db26afd0005',
                  'parentId': '4028f481585d828301585d8f85f60000',
                  'menuName': '用户管理',
                  'menuUrl': '/weather-web/user/manager',
                  'orderNo': 2,
                  'childList': null
                },
                {
                  'id': '4028f481585db7d701585dbaa5b40002',
                  'parentId': '4028f481585d828301585d8f85f60000',
                  'menuName': '项目管理',
                  'menuUrl': '/weather-web/sys/project',
                  'orderNo': 3,
                  'childList': null
                },
                {
                  'id': '4028f481585db7d701585dbb82810001',
                  'parentId': '4028f481585d828301585d8f85f60000',
                  'menuName': '角色管理',
                  'menuUrl': '/weather-web/role/manager',
                  'orderNo': 4,
                  'childList': null
                },
                {
                  'id': '4028f481585db7d701585dbc2b620002',
                  'parentId': '4028f481585d828301585d8f85f60000',
                  'menuName': '模块管理',
                  'menuUrl': '/weather-web/function/sysFun',
                  'orderNo': 5,
                  'childList': null
                },
                {
                  'id': '402881e760df3de30160df42567d0000',
                  'parentId': '4028f481585d828301585d8f85f60000',
                  'menuName': '操作日志',
                  'menuUrl': '/weather-web/sys/operatingLog',
                  'orderNo': 7,
                  'childList': null
                },
                {
                  'id': '402881fa5b04c1e9015b04c4dede0000',
                  'parentId': '4028f481585d828301585d8f85f60000',
                  'menuName': '经纬度转换',
                  'menuUrl': '/weather-web/weather/stationLatLngIndex',
                  'orderNo': 9,
                  'childList': null
                }
              ]
            },
            {
              'id': '2c9280dc5a7a1513015a7dabab0f0003',
              'parentId': '2c92848f62ce22440162d3367f830003',
              'menuName': '数据管理',
              'menuUrl': 'javascript:void(0)',
              'orderNo': 5,
              'childList': [
                {
                  'id': '2c9280dc5ad9cf37015ada1949a60000',
                  'parentId': '2c9280dc5a7a1513015a7dabab0f0003',
                  'menuName': '污染源管理',
                  'menuUrl': '/weather-web/pollution/index',
                  'orderNo': 1,
                  'childList': null
                },
                {
                  'id': '2c9280dc5ad9cf37015ada21f8810007',
                  'parentId': '2c9280dc5a7a1513015a7dabab0f0003',
                  'menuName': '天气预报',
                  'menuUrl': '/weather-web/data/forecast',
                  'orderNo': 2,
                  'childList': null
                }
              ]
            }
          ]
        },
        {
          'id': '2c92848f62ce22440162d6f935100004',
          'parentId': null,
          'menuName': '历史功能',
          'menuUrl': 'javascript:void(0)',
          'orderNo': 9,
          'childList': [
            {
              'id': '2c92848f63166130016324a7e9d20000',
              'parentId': '2c92848f62ce22440162d6f935100004',
              'menuName': '大气监测',
              'menuUrl': 'javascript:void(0)',
              'orderNo': 1,
              'childList': [
                {
                  'id': '2c9280dc5a7a1513015a7db92e9d000a',
                  'parentId': '2c92848f63166130016324a7e9d20000',
                  'menuName': '历史回顾',
                  'menuUrl': '/weather-web/airMonitoring/history_index',
                  'orderNo': 2,
                  'childList': null
                },
                {
                  'id': '2c9280dc5a7a1513015a7db9cc65000b',
                  'parentId': '2c92848f63166130016324a7e9d20000',
                  'menuName': '污染云图',
                  'menuUrl': '/weather-web/airMonitoring/pollutionCloudPC',
                  'orderNo': 3,
                  'childList': null
                },
                {
                  'id': '8a53b7825e5a12c3015e5a2d86f80000',
                  'parentId': '2c92848f63166130016324a7e9d20000',
                  'menuName': '虚拟网格',
                  'menuUrl': '/weather-web/airMonitoring/grid_index',
                  'orderNo': 4,
                  'childList': null
                }
              ]
            },
            {
              'id': '2c92848f61543d3801616139ba150002',
              'parentId': '2c92848f62ce22440162d6f935100004',
              'menuName': '大气日历',
              'menuUrl': 'javascript:void(0)',
              'orderNo': 2,
              'childList': [
                {
                  'id': '2c9280dc5ad2347e015ad4fd83c60006',
                  'parentId': '2c92848f61543d3801616139ba150002',
                  'menuName': '站点日历',
                  'menuUrl': '/weather-web/airCalendar/station_day_statics',
                  'orderNo': 1,
                  'childList': null
                },
                {
                  'id': '2c9280dc5ad2347e015ad4ff1b6e0007',
                  'parentId': '2c92848f61543d3801616139ba150002',
                  'menuName': '站点月历',
                  'menuUrl': '/weather-web/airCalendar/station_month_statics',
                  'orderNo': 2,
                  'childList': null
                }
              ]
            },
            {
              'id': '2c9280dc5a7a1513015a7db4e6510006',
              'parentId': '2c92848f62ce22440162d6f935100004',
              'menuName': '大气分析',
              'menuUrl': 'javascript:void(0)',
              'orderNo': 3,
              'childList': [
                {
                  'id': '2c9280dc5ab22789015ab798ce350000',
                  'parentId': '2c9280dc5a7a1513015a7db4e6510006',
                  'menuName': '全站分析',
                  'menuUrl': '/weather-web/stationAnalysis/weatherChart',
                  'orderNo': 2,
                  'childList': null
                },
                {
                  'id': '402881f25f56aaa2015f56af00d80000',
                  'parentId': '2c9280dc5a7a1513015a7db4e6510006',
                  'menuName': '重污染监测',
                  'menuUrl': '/weather-web/stationAnalysis/heavyPollution',
                  'orderNo': 3,
                  'childList': null
                },
                {
                  'id': '402882815d547e8a015d5481783f0001',
                  'parentId': '2c9280dc5a7a1513015a7db4e6510006',
                  'menuName': '历史同期数据分析',
                  'menuUrl': '/weather-web/statistics/historyDataAnalysis',
                  'orderNo': 4,
                  'childList': null
                },
                {
                  'id': '2c9280dc5ad2347e015ad50b073b000e',
                  'parentId': '2c9280dc5a7a1513015a7db4e6510006',
                  'menuName': '污染过程分析',
                  'menuUrl': '/weather-web/pollution/heavy/index',
                  'orderNo': 5,
                  'childList': null
                },
                {
                  'id': '2c9280dc5ab22789015ab7a9c6790002',
                  'parentId': '2c9280dc5a7a1513015a7db4e6510006',
                  'menuName': '多曲线分析',
                  'menuUrl': '/weather-web/stationAnalysis/multiplCurves',
                  'orderNo': 6,
                  'childList': null
                },
                {
                  'id': '4028b8815f9520b6015f95b6ad960002',
                  'parentId': '2c9280dc5a7a1513015a7db4e6510006',
                  'menuName': '站点统计',
                  'menuUrl': '/weather-web/stationAnalysis/stationStatistics',
                  'orderNo': 7,
                  'childList': null
                },
                {
                  'id': '2c9280dc5ab22789015ab79a8dfe0001',
                  'parentId': '2c9280dc5a7a1513015a7db4e6510006',
                  'menuName': '自定义分析',
                  'menuUrl': '/weather-web/stationAnalysis/customChart',
                  'orderNo': 8,
                  'childList': null
                }
              ]
            },
            {
              'id': '2c92848f63166130016324e913320001',
              'parentId': '2c92848f62ce22440162d6f935100004',
              'menuName': '城市数据',
              'menuUrl': 'javascript:void(0)',
              'orderNo': 4,
              'childList': [
                {
                  'id': '2c9280dc5a7a1513015a7dbee5d10012',
                  'parentId': '2c92848f63166130016324e913320001',
                  'menuName': '城市数据分析',
                  'menuUrl': '/weather-web/cityData/dataAnalysisPC',
                  'orderNo': 1,
                  'childList': null
                },
                {
                  'id': '2c9280dc5a7a1513015a7dbee6d10013',
                  'parentId': '2c92848f63166130016324e913320001',
                  'menuName': '城市对比分析',
                  'menuUrl': '/weather-web/cityData/comparativeAnalysis',
                  'orderNo': 2,
                  'childList': null
                }
              ]
            },
            {
              'id': '2c9280dc5a7a1513015a7db5fc070008',
              'parentId': '2c92848f62ce22440162d6f935100004',
              'menuName': '监测监管',
              'menuUrl': 'javascript:void(0)',
              'orderNo': 5,
              'childList': [
                {
                  'id': '2c9280dc5ad2347e015ad508fd6b000c',
                  'parentId': '2c9280dc5a7a1513015a7db5fc070008',
                  'menuName': '来源识别',
                  'menuUrl': '/weather-web/pollutionSource/index',
                  'orderNo': 3,
                  'childList': null
                },
                {
                  'id': '2c9280dc5ad2347e015ad509a471000d',
                  'parentId': '2c9280dc5a7a1513015a7db5fc070008',
                  'menuName': '相关性分析',
                  'menuUrl': '/weather-web/pollutionSpace/index',
                  'orderNo': 4,
                  'childList': null
                }
              ]
            },
            {
              'id': '402881255ce7a21b015ce7b0af7e0000',
              'parentId': '2c92848f62ce22440162d6f935100004',
              'menuName': '设备管理',
              'menuUrl': 'javascript:void(0)',
              'orderNo': 6,
              'childList': [
                {
                  'id': '2c9280dc5ad9cf37015ada2066050005',
                  'parentId': '402881255ce7a21b015ce7b0af7e0000',
                  'menuName': '设备告警',
                  'menuUrl': '/weather-web/alarm/equWarnIndex',
                  'orderNo': 1,
                  'childList': null
                }
              ]
            },
            {
              'id': '2c92825d5b5b71df015b5c71b08a0000',
              'parentId': '2c92848f62ce22440162d6f935100004',
              'menuName': '大屏管理',
              'menuUrl': 'javascript:void(0)',
              'orderNo': 7,
              'childList': [
                {
                  'id': '2c92825d5b5b71df015b5c7587720001',
                  'parentId': '2c92825d5b5b71df015b5c71b08a0000',
                  'menuName': '实时监测',
                  'menuUrl': '/weather-web/airMonitoring/realtime',
                  'orderNo': 1,
                  'childList': null
                },
                {
                  'id': '2c92825d5b5b71df015b5c773f2d0003',
                  'parentId': '2c92825d5b5b71df015b5c71b08a0000',
                  'menuName': '城市数据分析',
                  'menuUrl': '/weather-web/cityData/dataAnalysis',
                  'orderNo': 2,
                  'childList': null
                },
                {
                  'id': '2c92825d5b5b71df015b5c76622d0002',
                  'parentId': '2c92825d5b5b71df015b5c71b08a0000',
                  'menuName': '污染云图',
                  'menuUrl': '/weather-web/airMonitoring/pollutionCloud',
                  'orderNo': 3,
                  'childList': null
                }
              ]
            }
          ]
        },
        {
          'id': '2c9280dc5ab22789015ab7ad32db0003',
          'parentId': null,
          'menuName': '实时监测',
          'menuUrl': '/weather-web/airMonitoring/realtimePC',
          'orderNo': 10,
          'childList': null
        }
      ]
    }
  }
}
