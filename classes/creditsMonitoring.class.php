<?php

	class creditsMonitoring{

		private $array = array();

		public function __construct(){

		}

		public function index(){

			$title_currency = array('Credits','Ethereum');

			$top = array();
			$last_transation = array();
			for($i = 0;$i <= 10;$i++){
				$top[] = array(
					'title'				=> $title_currency[rand(0,1)],
					'count'				=> rand(90000,100000)
				);
			}

			for($i = 0;$i <=rand(4,10);$i++){
				$last_transation[] = array(
					'time'		=> date('d.m.Y'),
					'from'	=> 'Tx#'.GetRandString(),
					'to'	=> 'Tx#'.GetRandString(),
					'credits'	=> rand(1,100)
				);
			}

			$array = array(
				'credits' 			=> '5000',
				'top'				=> $top,
				'last_transation'	=> $last_transation
			);
			return $array;

		}


	}

?>
